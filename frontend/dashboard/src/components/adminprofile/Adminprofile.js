import React from "react";
// import { MdOutlinePersonOutline } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import "./AdminProfile.css";

function AdminProfileHeader() {
  return (
    <div className="admin-profile-header">
      <div className="admin-profile-header-left">
        <BsCircleFill className="circle" size={80} color="#CED4DA" />
        <span>관리자 이름</span>
      </div>
      <span className="logout">로그아웃</span>
    </div>
  );
}

function AdminInfoItem({ title, text, btn }) {
  return (
    <div className="admin-info">
      <span className="admin-info-title">{title}</span>
      <span className="admin-info-text">{text}</span>
      <span className="admin-info-btn">{btn}</span>
    </div>
  );
}

function AdminInfoItems() {
  return (
    <>
      <AdminInfoItem title={"사용버전"} text={"global"} btn={"업그레이드"} />
      <AdminInfoItem
        title={"APP"}
        text={"iOS 미사용 / Android 미사용"}
        btn={"설정"}
      />
      <AdminInfoItem
        title={"도메인"}
        text={"기본 도메인 사용 중"}
        btn={"설정"}
      />
      <AdminInfoItem title={"SMS"} text={"0건"} btn={"충전"} />
      <AdminInfoItem title={"관리자"} btn={"설정"} />
    </>
  );
}

function Manager({ manager_name, active }) {
  return (
    <div className="manager">
      <div className="manager-profile">
        {active === true && (
          <BsCircleFill className="alert-circle" size={8} color="#5779FF" />
        )}
        <BsCircleFill className="manager-img" size={60} color="#CED4DA" />
      </div>
      <span>{manager_name}</span>
    </div>
  );
}

function Managers() {
  return (
    <div className="managers">
      <Manager manager_name={"관리자1"} active={true} />
      <Manager manager_name={"관리자2"} active={true} />
      <Manager manager_name={"관리자3"} active={false} />
      <Manager manager_name={"관리자4"} active={false} />
    </div>
  );
}

export default function AdminProfile() {
  return (
    <>
      <div className="admin-profile">
        <AdminProfileHeader />
        <AdminInfoItems />
        <Managers />
      </div>
    </>
  );
}
