import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DAT_GHE, HUY_GHE } from '../Redux/types/datVeType'
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5" style={{ display: 'flex', }}>
          <button className="gheDuocChon"></button><span className='text-light' style={{ fontSize: "30px" }}>Ghế đã đặt</span>
          <button className="gheDangChon"></button><span className='text-light' style={{ fontSize: "30px" }}>Ghế đang đặt</span>
          <button className="ghe" style={{ marginLeft: "0" }}></button><span className='text-light' style={{ fontSize: "30px" }}>Ghế chưa đặt</span>
        </div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className='text-light' style={{ fontSize: "35px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return <tr key={index}>
                  <td className="text-light">{gheDangDat.soGhe}</td>
                  <td className="text-light">{gheDangDat.gia}</td>
                  <td><button onClick={() => {
                    this.props.dispatch({
                      type: HUY_GHE,
                      soGhe: gheDangDat.soGhe
                    })
                  }}> Hủy</button>
                  </td>
                </tr>
              })}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td className="text-light">Tổng Tiền</td>
                <td className="text-light">{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                  return tongTien += gheDangDat.gia;
                }, 0).toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.xemPhimRedux.danhSachGheDangDat
  }
}

export default connect(mapStateToProps)(ThongTinDatGhe)