import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// createBrowserRouter는 라우터 경로를 생성하는 함수입니다.
// RouterProvider는 우리가 createBrowserRouter에서 만든 경로를 리액트에게 제공하는 역할을 합니다.
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// as가 붙으면 별칭이 되서 변수 이름이 바뀜
// 비구조화 할당에서는 key(export한 변수)와 이름이 같아야되기 때문에 만약에 다른 변수 이름으로 사용하고 싶으면 as를 이용 해 줍니다.
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes";

const router = createBrowserRouter([
  // react-router 6버전 부터
  {
    path: "/", // 경로 설정
    element: <Root />, // 해당 경로에 나올 JSX 설정
    errorElement: <ErrorPage />, // react-router 6버전 부터
    loader: rootLoader, // react-router 6버전 부터 데이터를 불러오는 기능
    // 일반 form이 아닌 react-router에서 제공하는 Form으로 submit이 되었을 때 action이 실행이 되고, action에서 loader에 데이터가 저장이 자동으로 된다.
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        // useParams()를 했을 때 :뒤에있는 contactId가 key값이 되서 해당 정보를 받아 올 수 있습니다.
        path: "contacts/:contactId", // 뒤에 숫자를 받아서 숫자를 페이지에 전달
        element: <Contact />,
        loader: contactLoader,
      },
      {
        // useParams()를 했을 때 :뒤에있는 contactId가 key값이 되서 해당 정보를 받아 올 수 있습니다.
        path: "contacts/:contactId/edit", // 뒤에 숫자를 받아서 숫자를 페이지에 전달
        element: <EditContact />,
        // loader, action은 v6부터 추가가 된 기능으로 redux를 어느정도 따라 한 부분이 있습니다!
        // 그래서 국내에서는 충분히 다른 모듈들을 사용하기 때문에 수업에서는 자세하게 설명하지 않습니다.
        loader: contactLoader,
        action: editAction,
      },
      {
        // useParams()를 했을 때 :뒤에있는 contactId가 key값이 되서 해당 정보를 받아 올 수 있습니다.
        path: "contacts/:contactId/destroy", // 뒤에 숫자를 받아서 숫자를 페이지에 전달
        // loader, action은 v6부터 추가가 된 기능으로 redux를 어느정도 따라 한 부분이 있습니다!
        // 그래서 국내에서는 충분히 다른 모듈들을 사용하기 때문에 수업에서는 자세하게 설명하지 않습니다.
        action: destroyAction,
      },
    ],
  },
  // {
  //   // 일반 페이지가 이동이 되는 라우팅
  //   path: "contacts/:contactId", // 뒤에 숫자를 받아서 숫자를 페이지에 전달
  //   element: <Contact />,
  // },
]);

// RouterProvider에서 정보를 제공 받아서 사용 하겠다
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
