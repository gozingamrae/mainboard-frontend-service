import '../css/payment-completed-style.css';

const onClickHandler1 = (e) => {
    window.location.href= '/payment-info';
}

const onClickHandler2 = (e) => {
    window.location.href= '/main';
}

function paymentCompleted(){

    return(
        <div>
            <h1 align="center">+++ Header +++</h1>
            <hr/>
            <br/>

            <h2 className='message'>결제가 완료되었습니다.</h2>

        <div className='constents'>
            <div className='content' onClick={onClickHandler1}>결제 정보 확인하기</div>
            <div className='content' onClick={onClickHandler2}>메인으로</div>
        </div>

        <br/>
        <hr/>
        <h1 align="center">+++ Footer +++</h1>
            

        </div>
    );
}

export default paymentCompleted;