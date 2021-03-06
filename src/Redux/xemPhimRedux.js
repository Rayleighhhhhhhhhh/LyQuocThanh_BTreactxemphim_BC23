import { DAT_GHE, HUY_GHE } from "./types/datVeType";

const stateDefault = {
  danhSachGheDangDat: []
}

const xemPhimRedux = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
      if (index !== -1) {
        danhSachGheDangUpdate.splice(index, 1)
      } else {
        danhSachGheDangUpdate.push(action.ghe)
      }
      state.danhSachGheDangDat = danhSachGheDangUpdate;
      return { ...state }
    }
    case HUY_GHE: {
      let danhSachGheDangUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
      if (index !== -1) {
        danhSachGheDangUpdate.splice(index, 1)
      }
      state.danhSachGheDangDat = danhSachGheDangUpdate;
      return { ...state }
    }
    default: return { ...state }
  }
}

export default xemPhimRedux;