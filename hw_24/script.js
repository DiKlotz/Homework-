const URL = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;

const buttonsContainer = $('.buttons__container');
const teslaContainer = $('.tesla__container');

const renderCards = item => {
  teslaContainer.attr(`src`, `https://mc-astro.github.io/tesla-roadster-colors/img/${item.img}.jpg`);
}

const renderTitle = item => {
  $('#tesla__title').text(item.title);
}

const renderButtons = data => {
  $(data).each((index, item) => {
    let btns = $(`<button class="btnsColor" style="background-color:${item.color}"></button>`);
      $(btns).on("click", function () {
        renderCards(item);
        renderTitle(item);
      })
      buttonsContainer.append(btns);
  })

}

$.ajax({
  url: URL,
  method: `GET`,
  dataType: "JSON",
  success: data => {
    renderButtons(data);
    renderCards(data[0]);
    renderTitle(data[0])
    },
  error: error => console.log(error)
})