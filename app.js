const form = document.querySelector('#searchform');
const submit = document.querySelector('#submit');
const gifArea = document.querySelector('#gifarea');
const remove = document.querySelector('#delete');

submit.addEventListener('click', async function (e) {
    e.preventDefault();
    const search = document.querySelector('#search').value;
    const res = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=EH1l8QkNZdmnSo8hqKVtHbjEkpE4zHdC&tag=${search}&rating=g`);

    const url = res.data.data.images.original.url;
    const newGif = document.createElement('img');
    newGif.src = url;
    gifArea.append(newGif);
    form.reset();

});

$('#delete').on('click', function () {
    $gifArea.empty();
});

