## 코드를 짤 때 주의사항
 - 처음부터 내가 짠 코드라고 자만하지 말것. 
   1300줄 스스로 짰다고 해서 대단한게 아니라 남들이 봤을 때에도 이해가 바로 가도록 코드를 짜자
   내 지식 자랑하는 게 아니라 실무이기 때문에 남들과 협업하는 것을 항상 염두해 두자.

![1.png](./study/1.png)
### URL 경로를 짜서 라우팅을 할때 일관된 규칙으로 폴더 구조를 짜자

```js
    /boards/new => 게시판 등록페이지
    /boards/3 => 게시판 boardId 3번의 상세페이지
    /boards => 게시판 목록페이지
    /boards/3/edit => 게시판 boardId 3번의 수정 페이지


    /products/new => 상품 등록페이지
    /products/3 => 상품 productId 3번의 상세페이지
    /products => 상품 목록페이지
    /products/3/edit => 상품 productId 3번의 수정 페이지
```