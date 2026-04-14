// Create menu button
if ($('#uploadbtn').length == 0)
  $('#leftcontrols').append(
    '<button id="uploadbtn" class="btn btn-sm btn-default" title="ЗАГРУСТИТЬ КАРТИНУ" data-toggle="modal" data-target="#imgupload"><span class="glyphicon glyphicon-uploadbtn">Image</span></button>',
  );

// CSS
$(`<style>`).appendTo('head').text(`
.img-link-input {
	width: calc(100% - 38px);
	margin-right: 38px;
}

.upload-img-link-btn {
	position: relative;
	z-index: 0;
	top: -38px;
	margin-left: calc(100% - 38px);
}


/* FILE AREA */


.file-area {
	width: 100%;
	position: relative;
}
.file-area input[type=file] {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	opacity: 0;
	cursor: pointer;
}

.file-area .file-dummy {
	width: 100%;
	padding: 30px;
	padding-top: 65px;
	text-align: center;
	transition: background 0.3s ease-in-out;
}



.file-area .file-dummy.default-col {
	background: rgba(85, 185, 235, 0.15);
	border: 3px dashed rgba(85, 185, 235, 0.3);
}

.file-area .file-dummy.progress-col {
	background: rgb(235, 185, 85, 0.15);
	border: 3px dashed rgba(235, 185, 85, 0.3);
}

.file-area .file-dummy.success-col {
	background: rgb(185, 235, 85, 0.15);
	border: 3px dashed rgba(185, 235, 85, 0.3);
}

.file-area .file-dummy.error-col {
	background: rgb(235, 85, 185, 0.15);
	border: 3px dashed rgba(235, 85, 185, 0.3);
}


.file-area:hover .file-dummy.default-col {
	background: rgba(55, 155, 205, 0.35);
}

.file-area:hover .file-dummy.progress-col {
	background: rgba(205, 155, 55, 0.35);
}

.file-area:hover .file-dummy.success-col {
	background: rgba(155, 205, 55, 0.35);
}

.file-area:hover .file-dummy.error-col {
	background: rgba(205, 55, 155, 0.35);
}




.file-area .file-dummy .success {
	display: none;
}

.file-area input[type=file]:focus + .file-dummy {
	outline: none;
}
.file-area input[type=file]:valid + .file-dummy {
	border-color: rgba(55, 225, 105, 0.4);
	background-color: rgba(55, 225, 105, 0.3);
}
.file-area input[type=file]:valid + .file-dummy .success {
	display: inline-block;
}
.file-area input[type=file]:valid + .file-dummy .default {
	display: none;
}


/* PROGRESS BAR */


#imgProgress {
  width: 100%;
  background-color: rgb(20, 22, 26);
}

#imgProgressBar {
  width: 0%;
  height: 4px;
  background-color: rgb(75,175,225);
}

`);

// Panel cotent
$(`
	<div class="col-lg-12 col-md-12 closePanel" id="imagePanel" style="display: none;">
		<div class="well img-menu text-center" id="imagePanelContent">
			<div>
				<strong>Загрустить</strong>
				<br>
				<strong>картину / видеоматериал</strong>
			</div>

			<br>

			<input class="form-control img-link-input not-contained" type="text" id="imgUploadLink" placeholder="URL / Ctrl+V">
			<div class="c-wrap">
				<span id="imgLinkBtn" class="btn btn-md btn-info upload-img-link-btn" title="Загрузить картинку в чат">
					<span class="glyphicon glyphicon-open-file">
					</span>
				</span>
			</div>

			<br>

			<form action method="post">
				<div class="form-group file-area">
					<input type="file" name="images" id="imgUploadArea" required="required" multiple="multiple"/>


					<div id="imgProgress">
						<div id="imgProgressBar"></div>
					</div>


					<div id="fileArea" class="file-dummy default-col">
						<div class="success">
							<strong>Картинка загружена!</strong>
						</div>
						<div class="default">
							<strong>Выберите</strong>
							<br>
							<strong>картинку / видео</strong>
						</div>
						<br>
						<img src="" id="imgPreview" style="max-width:80%; max-height=60%;"/>
					</div>
					
				</div>
			</form>

		</div>
	</div>
`).insertBefore('#pollwrap');

// Handle button click
$('#uploadbtn').on('click', e => $('#imagePanel').slideToggle(200));

// Clear fields
var imgClearFields = function () {
  // Clear area
  $('#imgUploadArea').val('');
  // Clear link input
  $('#imgUploadLink').val('');
  // Clear preview image
  $('#imgPreview').attr('src', '');
  // Reset cursor
  $('#imagePanel').css({ cursor: 'auto' });
};

// Update file area UI color using CSS class
const fileAreaChangeColor = colClass => {
  $('#fileArea').removeClass('default-col');
  $('#fileArea').removeClass('success-col');
  $('#fileArea').removeClass('progress-col');
  $('#fileArea').removeClass('error-col');

  $('#fileArea').addClass(colClass);

  setTimeout(function () {
    $('#fileArea').removeClass(colClass);
    $('#fileArea').addClass('default-col');
  }, 2000);
};

// Update file area with error state and display error message
const fileAreaError = msg => {
  alert(msg);
  fileAreaChangeColor('error-col');
};

const uploadBinaryData = blob => {
  var reader = new FileReader();
  const fileSize = blob.size;
  
  // Handle file loaded state
  reader.onload = function (e) {
    // Convert file to base64
    const base64Raw = e.target.result;
    const base64Clean = base64Raw.substr(
      base64Raw.indexOf(',') + 1,
      base64Raw.length,
    );

    // Get base64 metadata
    const base64Metadata = base64Raw.split(';')[0].toLowerCase();
    // Get file type (image, video, audio)
    const fileType = base64Metadata.split('/')[0].split(':')[1];
    // Get file extension (png, webm, mp3)
    const ext = base64Metadata.split('/')[1].split('+')[0]; // Last split fixes svg+xml

    let provider = '';

    // Handle file type
    if (fileType === 'image') {
      // Supported extensions regex
      const regexImage = /^(jpg|jpeg|gif|png|apng|tiff|webp)$/;

      // Check if supported
      const isSupported = regexImage.test(ext);

      if (!isSupported) {
        fileAreaError('Данный формат картинок не поддерживается.');
        return;
      } else {
        provider = 'imgbb';
	$('#imgPreview').attr('src', base64Raw);
      }
    } else if (fileType === 'video') {
      // TODO: Handle video
      fileAreaError('Заугрзка видео не поддерживаются.');
      return;
      
      // // Supported extensions regex
      // const regexVideo = /^(webm|mp4)$/;

      // // Check if supported
      // const isSupported = regexVideo.test(ext);

      // if (!isSupported) {
      //   fileAreaError('Данный формат видео не поддерживается.');
      //   return;
      // } else {
      //   provider = 'catbox';
      // }
    }
    // Handle audio?
    else {
      // If not video nor image throw error
      fileAreaError('Не удалось распознать тип файла');
      return;
    }

    if (provider === '') {
      fileAreaError('Не удалось установить провайдера');
      return;
    }

    // Reset progress bar
    const prBar = resetProgressBar();

    // Get provider endpoint
    const reqSettings = {
      type: 'POST',
      xhr: function () {
        const xhr = new window.XMLHttpRequest();
        xhr.upload.addEventListener(
          'progress',
          function (evt) {
            if (evt.lengthComputable) {
              const percentComplete = evt.loaded / evt.total;

              prBar.style.width = percentComplete * 100 + '%';
            }
          },
          false,
        );
        return xhr;
      },
      beforeSend: function () {
        $('#fileArea').removeClass('default-col');
        $('#fileArea').addClass('progress-col');

        $('#imagePanel').css({ cursor: 'wait' });
      },
      error: () => {
        fileAreaError('Произошла ошибка при загрузке файла.');
        return;
      },
      complete: () => {
        $('#imagePanel').css({ cursor: 'auto' });
      },
    };

    switch (provider) {
      case 'imgbb':
        reqSettings.url = 'https://api.imgbb.com/1/upload';
        reqSettings.data = {
          key: '82ce2e50a90378b7a7c249f6561fa5c6',
          image: base64Clean,
        };
        reqSettings.success = res => {
          fileAreaChangeColor('success-col');
          finishUpload(prBar);

          $('#chatline').val(
            `${$('#chatline').val()} ${res.data.url.substring(0)} `,
          );
        };

        break;
      // Error
      default:
        alert('Не удалось распознать провайдера.');
        return;
    }

    // Send ajax
    $.ajax(reqSettings);
  };

  // Read file
  reader.readAsDataURL(blob);
};

// Handle selected file
$('#imgUploadArea').on('change', function () {
  const file = this.files[0];
  const fileSize = file.size;

  // File size > 200mb
  if (fileSize > 2e8) {
    fileAreaError('Слишком большой файл.');
  } else {
    uploadBinaryData(file);
  }

  // Clear file area value
  $('#imgUploadArea').val('');
});

// Upload image link
const uploadLinkData = link => {
  // Trim image link
  imgLink = link.trim();

  // Reset progress bar
  const prBar = resetProgressBar();

  // Create ajax settings
  let ajaxSettings = {
    xhr: function () {
      const xhr = new window.XMLHttpRequest();
      // Uploading progress
      xhr.upload.addEventListener(
        'progress',
        function (e) {
          if (e.lengthComputable) {
            prBar.style.width = `${(e.loaded / e.total) * 100}%`;
          }
        },
        false,
      );
      return xhr;
    },
    beforeSend: function () {
      $('#imagePanel').css({ cursor: 'wait' });
    },
    complete: function () {
      $('#imagePanel').css({ cursor: 'default' });
    },
    success: function (response) {
      response = jQuery.parseJSON(response);
      let newImgLink = response.data.link;

      $('#imgPreview').attr('src', newImgLink);
      $('#chatline').val(`${$('#chatline').val()} ${newImgLink} `);

      finishUpload(prBar);
    },
    error: function () {
      alert('Ошибка.');
    },
  };

  // Create form data
  const formData = new FormData();
  formData.append('image', imgLink);
  
  ajaxSettings = {
    ...ajaxSettings,
    url: 'https://api.imgur.com/3/image',
    method: 'POST',
    timeout: 5000,
    headers: {
      Authorization: 'Client-ID 711a7fc76bd63f3',
    },
    processData: false,
    mimeType: 'multipart/form-data',
    contentType: false,
    data: formData,
  };

  // Submit
  $.ajax(ajaxSettings);
};

// Upload pasted link
$('#imgLinkBtn').click(function () {
  const link = $('#imgUploadLink').val();
  uploadLinkData(link);

  // Reset link input
  $('#imgUploadLink').val('');
});

// Upload via image paste
$('#imgUploadLink').bind('paste', function (event) {
  const items = (event.clipboardData || event.originalEvent.clipboardData)
    .items;
  for (item of items) {
    if (item) {
      const { kind, type } = item;
      if (kind === 'file' && type.match('^image/')) {
        // Check if pasted content contains HTML
        if (items.length == 2) {
          const remoteItem = items['0'];
          remoteItem.getAsString(s => {
            // Get image src
            const img = $(s)['2'];
            const link = $(img).attr('src');
            // Upload as URL link
            uploadLinkData(link);
          });
        } else {
          // Upload as binary file
          const blob = item.getAsFile();
          uploadBinaryData(blob);
        }
      }
    }
  }
});

function resetProgressBar() {
  // Get progress bar reference
  const prBar = document.getElementById('imgProgressBar');

  // Reset progress bar
  prBar.style.backgroundColor = 'rgb(75,175,225)';
  prBar.style.width = '0%';

  return prBar;
}

function finishUpload(prBar) {
  const maxTimeout = 5000;
  const updateIntervalTimeout = 10;
  const updateWidthTick = 100 / (maxTimeout / updateIntervalTimeout);
  let width = 100;

  prBar.style.backgroundColor = 'rgb(225,175,75)';

  // Update progress bar
  const updateIntervalRef = setInterval(() => {
    width -= updateWidthTick;
    if (width > 0.0) prBar.style.width = `${width}%`;
    else prBar.style.width = '0%';
  }, updateIntervalTimeout);

  // Reset
  window.setTimeout(function () {
    imgClearFields();
    $('#chatline').focus();

    prBar.style.width = '0%';
    clearInterval(updateIntervalRef);
  }, maxTimeout);
}
