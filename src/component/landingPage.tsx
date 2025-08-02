function LandingPage() {
  return (
    <div className="relative h-screen w-full flex flex-col justify-start overflow-hidden text-center">
      <div className="w-full flex flex-row justify-start">
        <button
          className="flex flex-row justify-center items-center"
          style={{ padding: "0.5rem 0.5rem", borderRadius: "0.5rem" }}
        >
          <p className="text-md mr-1">
            ChatGED{" "}
            <span className="text-sm" style={{ color: "#999999" }}>
              George Evans Daenuwy
            </span>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4 translate-y-[2px]"
            style={{ color: "#999999" }}
          >
            <path
              fillRule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div id="spacer-lg"></div>
      <div className="flex flex-col justify-center items-center z-0">
        <h1 className="text-5xl text-black mb-10">
          Hey, George. What are you working on?
        </h1>
        <div id="textBox">
          <form className="w-full" action="/action_page.php">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder='Type "Hi George"'
              className="text-sm"
            />
          </form>
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row">
              {/* plus button */}
              <button className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v20M22 12H2"
                  />
                </svg>
              </button>
              {/* tools button */}
              <button className="flex flex-row items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
                <p className="text-xs ml-1">Tools</p>
              </button>
            </div>
            <div className="flex flex-row">
              {/* mic button */}
              <button
                className="flex items-center justify-center"
                style={{ padding: "0.5rem 0.5rem" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                  />
                </svg>
              </button>
              <button
                className="flex flex-row items-center justify-center pb-1"
                style={{
                  backgroundColor: "#00000015",
                  padding: "0rem 0.5rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <g>
                    <rect x="4" y="10" width="1.8" height="8" rx="1.5" />
                    <rect x="9" y="4" width="1.8" height="20" rx="1.5" />
                    <rect x="14" y="6" width="1.8" height="16" rx="1.5" />
                    <rect x="19" y="10" width="1.8" height="8" rx="1.5" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
