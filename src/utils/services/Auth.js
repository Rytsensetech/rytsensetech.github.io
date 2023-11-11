const baseURL = "http://localhost:7083/";

const regEndpoint = "api/user/registration";

export const userRegistration = async (userName, email, password) => {
  try {
    const apiRegistration = `${baseURL}${regEndpoint}`;
    console.log(apiRegistration, userName, email, password, "regg");
    const response = await fetch(apiRegistration, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during user registration:", error);
    throw error;
  }
};
