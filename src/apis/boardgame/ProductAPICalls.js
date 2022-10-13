import { 
    GET_PRODUCTS,
    GET_PRODUCT,
    POST_PRODUCT
} from '../../modules/productModules/ProductModule.js';


export const callProductListAPI = ({currentPage}) => {
    
    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/products?offset=${currentPage}&limit=15`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/products?offset=${currentPage}&limit=15`;
    }
    
    console.log('[ProduceAPICalls] requestURL : ', requestURL);

    return async (dispatch, getState) => {
        console.log("start")
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                
                "Accept": "*/*"                
            }
        })
        .then(response => response.json());
        if(result.status === 200 || result.status === 201){
            console.log("get product:", result);
            dispatch({ type: GET_PRODUCTS,  payload: result.data });
        }
    };
}

// 검색
export const callSearchProductListAPI = ({currentPage}) => {
    
    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/products/search?offset=1&limit=10`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/products/search?offset=1&limit=10`;
    }
    
    console.log('[SearchProduceAPICalls] requestURL : ', requestURL);

    return async (dispatch, getState) => {
        console.log("start")
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"                
            },
            body: JSON.stringify({
            "boardgameTypeCode": 1,
            "boardgameName": "코드네임",
            "minFee":1000,
            "maxFee":3000
            })
        })
        .then(response => response.json());
        if(result.status === 200 || result.status === 201){
            console.log('searchApi', result)
            dispatch({ type: GET_PRODUCT,  payload: result.data });
        }
        
    };
}


// 상품 명으로 검색
export const callProductListByProductNameAPI = ({productName}) => {
    
    let requestURL;

    if(productName !== undefined || productName !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/products/name?productName=${productName}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/products/name?productName=${productName}`;
    }
    
    console.log('[ProductListByProductNameAPI ] requestURL : ', requestURL);

    return async (dispatch, getState) => {
        console.log("start")
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"                
            }
        })
        .then(response => response.json());
        if(result.status === 200 || result.status === 201){
            console.log('callProductListByProductNameAPI result:', result)
            dispatch({ type: GET_PRODUCT,  payload: result.data });
        }
    };
}

// 검색
export const callDetailProductAPI = ({productCode}) => {
    
    let requestURL;

    if(productCode !== undefined || productCode !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/products/${productCode}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/products/${productCode}`;
    }
    
    console.log('[SearchProduceAPICalls] requestURL : ', requestURL);

    return async (dispatch, getState) => {
        console.log("start")
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"                
            }
        })
        .then(response => response.json());
        if(result.status === 200 || result.status === 201){
            console.log('detailProductApi', result)
            dispatch({ type: GET_PRODUCT,  payload: result.data });
        }
        
    };
}

