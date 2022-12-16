/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
// children으로 설정했던 경로를 Outlet위치에 보여줌.
import {
  Outlet,
  useLoaderData,
  Form,
  redirect,
  NavLink,
  useNavigation,
  useSearchParams,
  useSubmit,
} from "react-router-dom";
import { createContact, getContacts } from "../contacts";

// es7 await/async
// react-router의 6버전에 추가된 기능
// router안에서 데이터를 불러오는 기능
export async function loader({ request }) {
  // 이렇게 loader를 그냥 안에 넣으면 가능하지 않을까요?
  // 맞습니다 됩니다;
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

// 데이터를 작성하는(POST) 코드
// 추가가 된다 = action (redux)
export async function action() {
  // await 뒤에 http 통신이 들어갑니다.
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

function Root() {
  // createBroserRouter에서 loader 선언한 부분에서 데이터를 가지고 옵니다.
  const { contacts, q } = useLoaderData();
  // contacts안에는 내용이 contact.js에서 const contact가 object로 들어옵니다.
  const navigation = useNavigation();

  // const [count, changeCount] = useState();
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("q"));

  // react-router v6에 추가된 기능
  // submit이 포함된 Form에 값을 전달
  const submit = useSubmit();

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          {/* react-route의 Form != form */}
          <Form id="search-form" role="search">
            <input
              id="q"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                // react-route의 기능
                submit(event.currentTarget.form);
              }}
            />
            <div id="search-spinner" aria-hidden hidden />
            <div className="sr-only" aria-live="polite" />
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {/* contacts의 안에 데이터가 있으면 ? ul이 출력됨 : 없으면 p가 출력됨 */}
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet /> {/* 중첩 라우팅을 보여줄 위치 */}
      </div>
    </>
  );
}

export default Root;
