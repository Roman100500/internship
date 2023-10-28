export default class FetchRequest {
  constructor(url) {
    this.url = url;
  }

  async getAll(isImportant, name_like, isCompleted) {
    let query = "?";
    if (isImportant !== null && isImportant !== undefined) {
      query += `isImportant=${isImportant}&`;
    }
    if (name_like !== null && name_like !== undefined) {
      query += `name_like=${name_like}&`;
    }
    if (isCompleted !== null && isCompleted !== undefined) {
      query += `isCompleted=${isCompleted}&`;
    }
    const response = await fetch(`${this.url}/tasks${query}`);

    if (!response.ok) {
      console.error("Запрос не удался");
      return;
    }

    const data = await response.json();
    console.log(data);
  }

  async getId(taskId) {
    const response = await fetch(`${this.url}/tasks/${taskId}`);

    if (!response.ok) {
      console.error("Запрос не удался");
      return;
    }

    const data = await response.json();
    console.log(data);
  }

  async post(name = "Anonim", info = "unknown", isImportant = false) {
    const response = await fetch(`${this.url}/tasks`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: `${name}`,
        info: `${info}`,
        isImportant: isImportant,
      }),
    });

    if (!response.ok) {
      console.error("Запрос не удался");
      return;
    }

    const data = await response.json();
    console.log(data);
  }

  async patchId(taskId, name, info, isImportant, isCompleted = false) {
    const response = await fetch(`${this.url}/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: `${name}`,
        info: `${info}`,
        isImportant: isImportant,
        isCompleted: isCompleted,
      }),
    });

    if (!response.ok) {
      console.error("Запрос не удался");
      return;
    }

    const data = await response.json();
    console.log(data);
  }

  async deleteId(taskId) {
    const response = await fetch(`${this.url}/tasks/${taskId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Запрос не удался");
      return;
    }

    console.log("Пользователь удален");
  }
}
