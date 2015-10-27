function processData(data) {
	return data.map(function(item) {
		return `
			<div class="artist-list-item" data-artist-id="${item.objectId}">
			<img src="${item.Photo}">
			<p>${item.Artist}</p>
			<hr>
			</div>
			`;
	}).join('');
}

function listTemplate(data) {
  return `
    <h2>Artist List</h2>
    <div>${processData(data)}</div>
    <hr>
  `;
}

export default listTemplate;

