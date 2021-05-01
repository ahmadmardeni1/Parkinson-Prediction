$(document).ready(function() {
    /*multiple image preview first input*/
  
    $("#files").on("change", handleFileSelect);
  
    selDiv = $("#selectedFilesD");
    $("#myForm").on("submit", handleForm);
  
    $("body").on("click", ".selFile", removeFile);
  
    /*end image preview */
  
    /* Multiple image preview second input*/
    $("#mobile").on("change", handleFileSelect);
  
    selDivM = $("#selectFilesM");
    $("#myForm").on("submit", handleForm);
  
    $("body").on("click", ".selFile", removeFile);
  
    console.log($("#selectFilesM").length);
  });
  /*multiple image preview*/
  
  
  var selDiv = "";
  // var selDivM="";
  var storedFiles = [];
  
  function handleFileSelect(e) {
  
    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);
    var device = $(e.target).data("device");
    filesArr.forEach(function(f) {
  
      if (!f.type.match("image.*")) {
        return;
      }
      storedFiles.push(f);
  
      var reader = new FileReader();
      reader.onload = function(e) {
        var html = "<div><img src=\"" + e.target.result + "\" data-file='" + f.name + "' class='selFile' title='Click to remove'>" + f.name + "<br clear=\"left\"/></div>";
  
        if (device == "mobile") {
          $("#selectedFilesM").append(html);
        } else {
          $("#selectedFilesD").append(html);
        }
      }
      reader.readAsDataURL(f);
    });
  
  }
  
  function handleForm(e) {
    e.preventDefault();
    var data = new FormData();
  
    for (var i = 0, len = storedFiles.length; i < len; i++) {
      data.append('files', storedFiles[i]);
    }
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'handler.cfm', true);
  
    xhr.onload = function(e) {
      if (this.status == 200) {
        console.log(e.currentTarget.responseText);
        alert(e.currentTarget.responseText + ' items uploaded.');
      }
    }
  
    xhr.send(data);
  }
  
  function removeFile(e) {
    var file = $(this).data("file");
    for (var i = 0; i < storedFiles.length; i++) {
      if (storedFiles[i].name === file) {
        storedFiles.splice(i, 1);
        break;
      }
    }
    $(this).parent().remove();
  }