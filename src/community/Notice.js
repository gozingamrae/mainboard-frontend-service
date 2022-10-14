import style from "./Notice.module.css";

function Notice() {
  /*더미 데터*/
  const dummy = {
    header: ["번호", "제목", "날짜", "작성자", "조회"],
    data: [
      {
        number: "1",
        title: "제목1",
        date: "2017-02-01",
        writer: "관리자",
        count: "1",
      },
      {
        number: "2",
        title: "제목2",
        date: "2017-02-01",
        writer: "관리자",
        count: "2",
      },
      {
        number: "3",
        title: "제목3",
        date: "2017-02-01",
        writer: "관리자",
        count: "3",
      },
    ],
  };

  return (
    <div>
      <div className={style.titlediv}>
        <h1 className={style.title}>공지시항</h1>
      </div>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            {dummy.header.map((item) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dummy.data.map((item) => {
            return (
              <tr className={style.noticerow}>
                <td>{item.number}</td>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>{item.writer}</td>
                <td>{item.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Notice;
