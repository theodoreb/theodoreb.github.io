"use strict";

var xhr = new XMLHttpRequest();

function renderComment (comment) {
  var
    time = '<time datetime="' + comment.created_at +  '" itemprop="dateCreated">' + comment.created_at.split('T')[0] + '</time>',
    user = '<span itemprop="name">' + comment.user.login +'</<span>',
    header = '<h3 itemprop="author" itemscope itemtype="http://schema.org/Person"><a href="#comment' + comment.id + '">' + user + '</a><small>' + ' — ' + time + '</small></h3>',
    content = marked(comment.body),
    me = comment.user.login === 'theodoreb';

  return '<article class="comment' + (me ? ' me' : '') + '" itemscope itemtype="http://schema.org/Comment">' +
    '<a name="comment' + comment.id + '"></a>' +
    '<header>' + header + '</header>' +
    '<div class="content" itemprop="text">' + content + '</div>' +
    '</article>';
}

function handleReadystatechange () {
  if (xhr.readyState === 4 && xhr.status === 200){
    if (xhr.response && xhr.response.length) {
      var html = xhr.response.map(renderComment);
      document.getElementById('comments').innerHTML = html.join('\n');
    }
  }
}

xhr.open('GET', issueUrl, true);
xhr.responseType = 'json';
xhr.onreadystatechange = handleReadystatechange;
xhr.send();
