import { FormEvent } from "react";
import { useRouter } from "next/router";
import { LoginSchema } from "../data/schemas/login";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const { error, value } = LoginSchema.validate(
      Object.fromEntries(formData.entries())
    );
    if (error) {
      alert("Login or password is invalid");
      return;
    }

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    });

    if (response.ok) {
      const responseJson = await response.json();
      const encryptedSessionData = responseJson.encryptedSessionData;
      Cookies.set("session", encryptedSessionData, {
        httpOnly: false,
        secure: false,
        expires: new Date(Date.now() + 604800 * 1000), // One week
        path: "/",
      });
      router.push("/posts");
    } else {
      alert("Password or login is  incorrect");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ width: "22rem" }}>
        <div className="card-body">
          <h1 className="text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
