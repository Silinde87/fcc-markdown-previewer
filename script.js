function parseIt(){
    let editor = document.getElementById('editor').value;
    console.log(editor);
    document.getElementById('preview').innerHTML = 
    marked(editor);
}




