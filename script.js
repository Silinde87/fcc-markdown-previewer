function parseIt(){
    let editor = document.getElementById('editor').value;
    console.log(editor);
    document.getElementById('preview').innerHTML = 
    marked(editor);
}

$(".btn-maximize").click(function() {
    let divToMaximize = "#" + $(this).parent().parent().attr('id');
    let divToHide = "#previewWrap";
    console.log($(this).parent().parent().attr('id'));
    if(divToMaximize === "#previewWrap"){
        divToHide = "#editorWrap"
        console.log("in");
    }
    $(divToMaximize).toggleClass("maximized");
    $(divToHide).toggleClass("hide");
  });


