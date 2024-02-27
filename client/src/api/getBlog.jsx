const toJson = async (res) => {
  const json = await res.json();
  if(res.ok){
      return json;
  }else{
      throw new Error(json.message);
  }
}

// 日報一覧を取得する関数
export const getBlog = async () => {
  const res = await fetch('http://localhost:8000/blog/', {
    method: 'GET',
  });
  return await toJson(res);
};

// 1日の詳細を取得する関数
export const getBlogDetail = async (id) => {
  const res = await fetch(`http://localhost:8000/blog/${id}`, {
    method: 'GET',
  });
  return await toJson(res);
};

// カテゴリ別一覧を取得する関数
export const getCategory = async (cat) => {
  const res = await fetch(`http://localhost:8000/blog/${cat}`, {
    method: 'GET',
  });
  return await toJson(res);
};
