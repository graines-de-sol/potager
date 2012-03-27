// XSS prevent when JS is disabled
$('.content_container').each(function(){
  $(this).next('.textarea_container').append("<textarea name='article[content]' class='expandable MCEeditable'>"+$(this).html()+"</textarea>")
});

// Toolbars and stuff...
tinyMCE.init({
  mode : "textareas",
  editor_selector : "MCEeditable",
  theme : "advanced",
  skin : "o2k7",
  skin_variant : "black",
  plugins : "safari,xhtmlxtras,media,paste,table",
  language : "fr",
  height: '340px',
  width: '880px',
  content_css : "/assets/bootstrap.css",
  theme_advanced_buttons1 : "bold,italic,underline,strikethrough,bullist,numlist,blockquote,justifyleft,justifycenter,justifyright,formatselect,link,unlink,image,pasteword,|,tablecontrols",
  theme_advanced_toolbar_location : "top",
  theme_advanced_toolbar_align: "left",
  theme_advanced_resizing: true,
  entity_encoding: "named",
  relative_urls: false,
  convert_urls: true
})

