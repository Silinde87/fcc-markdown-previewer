let isMaximized = false;
const ICON_MAXIMIZE_CLASS = ".fa-arrows-alt";
const ICON_MAXIMIZE_DOM = '<i class="fa fa-arrows-alt"></i>';
const ICON_MINIMIZE_CLASS = ".fa-compress-alt";
const ICON_MINIMIZE_DOM = '<i class="fas fa-compress-alt"></i>';

function parseIt(){
    let editor = document.getElementById('editor').value;
    console.log(editor);
    document.getElementById('preview').innerHTML = 
    marked(editor);
    marked.setOptions({
        breaks: true,
    })
}

$(".btn-maximize").click(function() {
    let divToMaximize = "#" + $(this).parent().parent().attr('id');
    let divToHide = "#previewWrap";
    if(divToMaximize === "#previewWrap"){
        divToHide = "#editorWrap"
    }
    if(isMaximized){
        $(divToMaximize).toggleClass("maximized");
        $(divToHide).show();
        $(ICON_MINIMIZE_CLASS).replaceWith(ICON_MAXIMIZE_DOM);
        isMaximized = false;
    }else{
        $(divToMaximize).toggleClass("maximized");
        $(divToHide).hide();
        $(ICON_MAXIMIZE_CLASS).replaceWith(ICON_MINIMIZE_DOM);
        isMaximized = true;
    }
  });


