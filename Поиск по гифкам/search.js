// пишем функцию поиска гифки
function search() {
    // обрезаем поисковой запрос от лишнего, кладем в переменную
    let searchVal = document.getElementById('search').value.trim();
    // пишем запрос, указывает количество гифок и два языка
    fetch("https://api.giphy.com/v1/gifs/search?api_key=Nl32S6MSlz2ragvTPCMwDNSvk6NwgIJs&q=" + searchVal + "&limit=5&offset=0&rating=g&lang=ru/en")
        .then(response => response.json())
        .then(data => {
            let result = data.data
            console.log(result);
            // контейнер пустой, пишем цикл для заполнения
            document.getElementById('container').innerHTML = "";
            // цикл из 5 итераций и складываем результат поиска в пустой контейнер
            for (let i = 0; i <= 5; i++) {
                document.getElementById('container').innerHTML +=
                    `<div>
                    <img src="${result[i].images.original.url}" alt ="sorry, gif didn't load"><br>
                    <a href="${result[i].url}">>>>Original<<<</a>
                    </div>`;
            }
        })
        .catch(error => console.log(error));
}