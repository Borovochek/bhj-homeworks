
const form = document.getElementById('form');
const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData();
    const file = fileInput.files[0];
    formData.append('file', file);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

    xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
            const percentComplete = Number((e.loaded / e.total).toFixed(2));
            progress.value = percentComplete;
        }
    };
    xhr.upload.onload = function () {
        alert("Файл полностью отправлен!");
    };

    xhr.onload = function () {
        if (xhr.status === 201) {
            alert("Файл сохранён на сервере!");
        }
    };

    xhr.send(formData);
})




