import axios from 'axios'


const token = 'bbae7281ff6b6caa4d1a82ddcab07530c77e47264afbf760f1871e9b7a272763eb6320d72c065901e98f0383594e358ca1c210cf316a2684dd76e5c0b967e0a7f895bab07734fb656853559f189f44772bd3eb738fa1ce353583231ec1c5d7edd619a2afb2b90297e2769309bf7e691107f1431fd3aa74310cee8c46131e5195'

const GitHubClient = axios.create({
  baseURL: 'https://luck-admin.luckyroofs.com/',
  headers: {
   
    Authorization: `Bearer ${token}`
  }
});
export default GitHubClient;