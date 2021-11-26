import { gistsStart, gistsError, gistsSuccess } from "./actions";

export const getGists =
  (page = 1) =>
  async (dispatch, _, api) => {
    try {
      dispatch(gistsStart());

      const { data } = await api.getGistsApi(page);

      dispatch(gistsSuccess(data));
    } catch (e) {
      dispatch(gistsError(e));
    }
  };

//@TODO закончить санк
export const searchGistsByUserName =
  (name = "") =>
  async (dispatch, _, api) => {};
