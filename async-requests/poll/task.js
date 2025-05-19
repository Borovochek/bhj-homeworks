const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        const pollTitle = document.querySelector('#poll__title');
        const pollAnswers = document.querySelector('#poll__answers');
        const pollObj = JSON.parse(xhr.responseText);
        const title = pollObj.data.title;
        const answers = pollObj.data.answers;
        console.log(pollObj);

        pollTitle.textContent = title;

        pollAnswers.innerHTML = '';

        answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'poll__answer';
            button.textContent = answer;

            // button.addEventListener('click', () => {
            //     alert('Спасибо, ваш голос засчитан!');
            // }) Вариант решения без отправки POST запроса

            button.addEventListener('click', () => {
                const voteXhr = new XMLHttpRequest();
                voteXhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                voteXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                const postData = `vote=${pollObj.id}&answer=${index}`;
                voteXhr.send(postData);

                voteXhr.onload = function () {
                    if (voteXhr.status === 201) {
                        alert('Спасибо, ваш голос засчитан!');
                        const votesObj = JSON.parse(voteXhr.responseText);
                        const votesStat = votesObj.stat;
                        pollAnswers.style.display = 'none';

                        const totalVotes = votesStat.reduce((sum, item) => sum + item.votes, 0);

                        votesStat.forEach((el) => {
                            const percentage = totalVotes > 0 ? ((el.votes / totalVotes) * 100).toFixed(2) : 0;
                            pollTitle.insertAdjacentHTML(
                                'beforeend',
                                `<div>
                                    ${el.answer} ${percentage} %.
                                </div>`
                            );
                        });
                    } else {
                        alert('Ошибка: ' + voteXhr.status);
                    }
                };
            });
            pollAnswers.appendChild(button);
        })

    }
};

xhr.send();
