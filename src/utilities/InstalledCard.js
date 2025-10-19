

// get the books list if store any ;
const getAppsStr = () => {
  const StoreApps = localStorage.getItem("installedCard");

  if (StoreApps) {
    return JSON.parse(StoreApps);
  } else {
    return [];
  }
};

// then if set the books id in installedCard or give a alert if there already have one ;
const AddAppsDB = (id) => {
  const StoredApps = getAppsStr();

  if (!StoredApps.includes(id)) {
    StoredApps.push(id);
    const data = JSON.stringify(StoredApps);
    localStorage.setItem("installedCard", data);
  }
};

// Remove app ID from localStorage
const RemoveAppsDB = (id) => {
  const StoredApps = getAppsStr();

  // Filter the id to remove
  const updated = StoredApps.filter((appId) => appId !== id);

  // Update localStorage
  localStorage.setItem("installedCard", JSON.stringify(updated));
};

export { AddAppsDB, getAppsStr, RemoveAppsDB };
