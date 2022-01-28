import axios from 'axios'

const APIkey = 'AIzaSyDbuxJxPyEKeSe2oPxBwV2E_kx3BaJf9SA'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params : {
    part: 'snippet',
    masResults : 5,
    key: APIkey
  }
})

