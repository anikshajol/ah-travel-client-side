import React from "react";

const Blog = () => {
  return (
    <div>
      <section>
        <div className="p-5">
          <section className=" container mx-auto mt-6">
            <h2 className="text-2xl font-bold capitalize">
              Difference between SQL and NoSQL.
            </h2>
            <p className="text-lg mt-6">
              <span className="text-4xl font-bold text-blue-700">SQL:</span>
              <ul>
                <li>databases are relational,</li>
                <li>
                  SQL databases use structured query language and have a
                  predefined schema.
                </li>
                <li>SQL databases are vertically scalable</li>
                <li>SQL databases are table-based</li>
                <li>SQL databases are better for multi-row transactions</li>
              </ul>
            </p>
            <p className="text-lg mt-6">
              <span className="text-4xl font-bold text-blue-700">NoSQL:</span>
              <ul>
                <li>NoSQL databases are non-relational.</li>
                <li>
                  NoSQL databases have dynamic schemas for unstructured data.
                </li>
                <li>NoSQL databases are horizontally scalable.</li>
                <li>
                  NoSQL databases are document, key-value, graph, or wide-column
                  stores.
                </li>
                <li>
                  NoSQL is better for unstructured data like documents or JSON.
                </li>
              </ul>
            </p>
          </section>
          <section className=" container mx-auto mt-6">
            <h2 className="text-2xl font-bold capitalize">
              What is JWT, and how does it work?
            </h2>
            <p className="text-lg mt-6">
              JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
              compact and self-contained way for securely transmitting
              information between parties as a JSON object. This information can
              be verified and trusted because it is digitally signed.
            </p>
          </section>

          <section className=" container mx-auto mt-6">
            <h2 className="text-2xl font-bold">
              What is the difference between javascript and NodeJS?
            </h2>
            <p className="text-lg mt-6">
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language.
            </p>
          </section>
          <section className=" container mx-auto mt-6">
            <h2 className="text-2xl font-bold">
              How does NodeJS handle multiple requests at the same time?
            </h2>
            <p className="text-lg mt-6">
              How NodeJS handle multiple client requests? NodeJS receives
              multiple client requests and places them into EventQueue. NodeJS
              is built with the concept of event-driven architecture. NodeJS has
              its own EventLoop which is an infinite loop that receives requests
              and processes them.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Blog;
