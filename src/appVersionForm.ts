export const createAppVersionForm = () => {
  const defaultVersion = "main";
  const currentVersion = localStorage.getItem("appVersion");
  const hasCurrentVersion =
    typeof currentVersion === "string" && currentVersion !== "";
  const version = hasCurrentVersion ? currentVersion : defaultVersion;

  const container = document.getElementById("us-scriptcontrol");
  if (!container) {
    console.warn(
      "failed to construct app version form: no container found to attach to",
    );

    return;
  }

  const wrapper = document.createElement("div");

  const label = document.createElement("label");
  label.setAttribute("for", "us-app-version-input");
  label.className = "control-label";
  label.textContent = "Версия скриптов";
  label.title = "Используемая версия скриптов";

  const input = document.createElement("input");
  input.className = "form-control";
  input.id = "us-app-version-input";
  input.type = "text";
  input.value = version;
  input.placeholder = defaultVersion;

  const button = document.createElement("button");
  button.className = "btn btn-sm btn-info";
  button.textContent = "Применить & Обновить";
  button.addEventListener("click", () => {
    localStorage.setItem("appVersion", input.value.trim());
    location.reload();
  });

  wrapper.appendChild(label);
  wrapper.appendChild(input);
  wrapper.appendChild(button);
  container.appendChild(wrapper);
};
