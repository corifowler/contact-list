function artistTemplate(data) {

  return `
    <div class="full-profile">
      <h2>Artist Profile</h2>
      <div><img class="profile" src="${data.Photo}"></div>
      <div><i class="fa fa-user"></i>${data.Artist}</div>
      <hr>
      <div><i class="fa fa-chevron-right"></i>Song Title: ${data.SongTitle}</div>
      <hr>
      <div><i class="fa fa-chevron-right"></i>Album Name: ${data.Album}</div>
      <hr>
      <div class="twitter"><i class="fa fa-twitter"></i>${data.Twitter}</div>
    </div>`;
}

export default artistTemplate;