search11st = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "http://search.11st.co.kr/SearchPrdAction.tmall?method=getTotalSearchSeller&kwd=" + encodeURI(encodeURIComponent(query))});
};

chrome.contextMenus.create({
  title: "11번가에서 상품 빠르게 검색하기!",
  contexts:["selection"],
  onclick: search11st
});