const GITPOD_WORKSPACE_ID = process.env.REACT_APP_GITPOD_WORKSPACE_ID
const GITPOD_WORKSPACE_CLUSTER_HOST = process.env.REACT_APP_GITPOD_WORKSPACE_CLUSTER_HOST

export const API_BASE_URL =
  process.env.NODE_ENV == 'production' || process.env.REACT_APP_DEV_REMOTE == 'remote'
    ? 'https://dev-server.idurarapp.com/api/'
    // ? `https://8888-${GITPOD_WORKSPACE_ID}.${GITPOD_WORKSPACE_CLUSTER_HOST}/api/`
    : 'http://localhost:8888/api/';
export const DOWNLOAD_BASE_URL =
  process.env.NODE_ENV == 'production' || process.env.REACT_APP_DEV_REMOTE == 'remote'
    ? 'https://dev-server.idurarapp.com/download/'
    // ? `https://8888-${GITPOD_WORKSPACE_ID}.${GITPOD_WORKSPACE_CLUSTER_HOST}/download/`
    : 'http://localhost:8888/download/';
export const ACCESS_TOKEN_NAME = 'x-auth-token';
