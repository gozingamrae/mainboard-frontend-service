import "../css/orderreport-style.css";


function orderReportTable(){
    return(
        <div className="box">
            <table>
                <tr><th>칼럼1</th><th>칼럼2</th><th>칼럼3</th><th>칼럼4</th><th>칼럼5</th><th>칼럼6</th></tr>
                <tr><td>값1</td><td>값2</td><td>값3</td><td>값4</td><td>값5</td><td>값6</td></tr>
                <tr><td>값1</td><td>값2</td><td>값3</td><td>값4</td><td>값5</td><td>값6</td></tr>
                <tr><td>값1</td><td>값2</td><td>값3</td><td>값4</td><td>값5</td><td>값6</td></tr>
                <tr><td>값1</td><td>값2</td><td>값3</td><td>값4</td><td>값5</td><td>값6</td></tr>
                <tr><td>값1</td><td>값2</td><td>값3</td><td>값4</td><td>값5</td><td>값6</td></tr>

            </table>
            <div className="pageButtonBox">
                <img src="/common/left_arrow.png"/>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <img src="/common/right_arrow.png"/>
            </div>
            
        </div>
    )


}
export default orderReportTable;