"use strict";

var xhr = new XMLHttpRequest();

function renderComment (comment) {
  var
    time = '<time datetime="' + comment.created_at +  '" itemprop="dateCreated">' + comment.created_at.split('T')[0] + '</time>',
    user = '<span itemprop="name">' + comment.user.login +'</<span>',
    header = '<h3 itemprop="author" itemscope itemtype="http://schema.org/Person"><a href="#comment' + comment.id + '">' + user + '</a><small>' + ' — ' + time + '</small></h3>',
    content = marked(comment.body),
    me = comment.user.login === 'theodoreb';

  return '<a name="comment' + comment.id + '"></a>' +
    '<article class="comment" itemscope itemtype="http://schema.org/Comment">' +
    '<header>' + header + '</header>' +
    (me ? '<blockquote>' : '') +
    '<div class="content" itemprop="text">' + content + '</div>' +
    (me ? '</blockquote>' : '') +
    '</article>';
}

function handleReadystatechange () {
  if (xhr.readyState === 4 && xhr.status === 200){
    var html = xhr.response.map(renderComment);
    document.getElementById('comments').innerHTML = html.join('\n');
  }
}

xhr.open('GET', issueUrl, true);
xhr.responseType = 'json';
xhr.onreadystatechange = handleReadystatechange;
xhr.send();
