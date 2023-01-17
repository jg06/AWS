/* eslint-disable import/prefer-default-export */
import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

// async 는 await을 쓰겠다~!
export async function action({ params }) {
  // await에서 호출된 함수가 끝날 때 까지 다른 코드 동작하지마!
  await deleteContact(params.contactId);
  // 삭제가 완료 되면 제일 초기 페이지로 이동 해라.
  return redirect("/");
}
