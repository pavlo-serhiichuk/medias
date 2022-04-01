import {hideLoading, showLoading} from "../redux/authReducer";
import {deleteFilters} from "../redux/sidebarReducer";
import {setFilteredProducts} from "../redux/productsReducer";
import axios from "axios";

const serverURL = 'http://localhost:1113/'

const get = (url) => fetch(`${serverURL}${url}`).then(res => res.json())

const post = (url, data) => axios.post(`${serverURL}${url}`, data)

//    const post = fetch(`${serverURL}${url}`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body:  JSON.stringify(data),
// })
//     .then( async res =>  {
//         const data = await res.json();
//
//         return {
//             status: res.status,
//             ...data
//         };
//     });

const put = (url, data) => axios.put(`${serverURL}${url}`, {data})

// const put = (url, data) =>
//     fetch(`${serverURL}${url}`, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body:  JSON.stringify(data),
// }).then(res => res.json())

export const authAPI = {
    signIn(data) {
        return post('signin', data)
    },
    login(data) {
        return put('login', data)
    }
}

export const productsAPI = {
    getBooks() {
        return get('books')
    },
    getFilteredBooks(data) {
        debugger
        return get(`books?_sort=${data.filterName}`)
    },
    getGuitars() {
      return get('guitars')
    },
    getFilteredGuitars(data) {

        return get(`guitars?_sort=${data.filterName}`)
    },
    getVouchers() {
      return get('vouchers')
    },
    getFilteredVouchers(data) {
        return get(`vouchers?_sort=${data.filterName}`)
    },
    getCountries() {
        return get('countries')
    },
    getCountryFilteredVouchers(countryID) {
        return get(`country?id=${countryID}`)
    }
}

export const wishesAPI = {
    getWishes() {
        return get('wishes')
    },
    setWish(data) {
        return post(`wish`, data)
    }
}

export const articlesAPI = {
    getArticles() {
        return get('articles')
    },
    getFullArticle(articleID) {
        return get(`article?id=${articleID}`)
    }
}

export const request = (requestType, actionReducer) => async dispatch => {
    dispatch(showLoading())
    const response = await requestType()
    debugger
    dispatch(actionReducer(response))
    dispatch(hideLoading())
}

export const filterRequest = (method, data) => async dispatch => {
    dispatch(showLoading())
    let response =  await method(data)

    dispatch(setFilteredProducts(response))
    dispatch(deleteFilters())
    dispatch(hideLoading())
}

