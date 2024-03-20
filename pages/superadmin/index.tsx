import SuperadminLayout from "@/components/layout/superadmin";
import React from "react";

function SuperadminIndex() {
  return (
    <SuperadminLayout title="Dashboard">
      <div className="row">
        <div className="col-xl-8">
          <div className="white_card mb_30 card_height_100">
            <div className="white_card_header">
              <div className="row align-items-center justify-content-between flex-wrap">
                <div className="col-lg-4">
                  <div className="main-title">
                    <h3 className="m-0">Stoke Details</h3>
                  </div>
                </div>
                <div className="col-lg-4 text-end d-flex justify-content-end">
                  <select className="nice_Select2 max-width-220">
                    <option value={1}>Show by month</option>
                    <option value={1}>Show by year</option>
                    <option value={1}>Show by day</option>
                  </select>
                </div>
              </div>{" "}
            </div>
            <div className="white_card_body">
              <div id="management_bar" />
            </div>
          </div>
        </div>
        <div className="col-xl-4 ">
          <div className="white_card card_height_100 mb_30 user_crm_wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="single_crm">
                  <div className="crm_head d-flex align-items-center justify-content-between">
                    <div className="thumb">
                      <img src="admin/img/crm/businessman.svg" alt="" />
                    </div>
                    <i className="fas fa-ellipsis-h f_s_11 white_text" />
                  </div>
                  <div className="crm_body">
                    <h4>2455</h4>
                    <p>User Registrations</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single_crm ">
                  <div className="crm_head crm_bg_1 d-flex align-items-center justify-content-between">
                    <div className="thumb">
                      <img src="admin/img/crm/customer.svg" alt="" />
                    </div>
                    <i className="fas fa-ellipsis-h f_s_11 white_text" />
                  </div>
                  <div className="crm_body">
                    <h4>2455</h4>
                    <p>User Registrations</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single_crm">
                  <div className="crm_head crm_bg_2 d-flex align-items-center justify-content-between">
                    <div className="thumb">
                      <img src="admin/img/crm/infographic.svg" alt="" />
                    </div>
                    <i className="fas fa-ellipsis-h f_s_11 white_text" />
                  </div>
                  <div className="crm_body">
                    <h4>2455</h4>
                    <p>User Registrations</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single_crm">
                  <div className="crm_head crm_bg_3 d-flex align-items-center justify-content-between">
                    <div className="thumb">
                      <img src="admin/img/crm/sqr.svg" alt="" />
                    </div>
                    <i className="fas fa-ellipsis-h f_s_11 white_text" />
                  </div>
                  <div className="crm_body">
                    <h4>2455</h4>
                    <p>User Registrations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="crm_reports_bnner">
              <div className="row justify-content-end ">
                <div className="col-lg-6">
                  <h4>Create CRM Reports</h4>
                  <p>Outlines keep you and honest indulging honest.</p>
                  <a href="#">
                    Read More <i className="fas fa-arrow-right" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="main-title">
                    <h3 className="m-0">New Users</h3>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row justify-content-end">
                    <div className="col-lg-8 d-flex justify-content-end">
                      <div className="serach_field-area theme_bg d-flex align-items-center">
                        <div className="search_inner">
                          <form action="#">
                            <div className="search_field">
                              <input type="text" placeholder="Search" />
                            </div>
                            <button type="submit">
                              {" "}
                              <img
                                src="admin/img/icon/icon_search.svg"
                                alt=""
                              />{" "}
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="col-lg-4 mt_20">
                  <select className="nice_Select2 wide">
                    <option value={1}>Show by All</option>
                    <option value={1}>Show by A</option>
                    <option value={1}>Show by B</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="white_card_body ">
              <div className="single_user_pil d-flex align-items-center justify-content-between">
                <div className="user_pils_thumb d-flex align-items-center">
                  <div className="thumb_34 mr_15 mt-0">
                    <img
                      className="img-fluid radius_50"
                      src="admin/img/customers/1.png"
                      alt=""
                    />
                  </div>
                  <span className="f_s_14 f_w_400 text_color_11">
                    Jhon Smith
                  </span>
                </div>
                <div className="user_info">Customer</div>
                <div className="action_btns d-flex">
                  <a href="#" className="action_btn mr_10">
                    {" "}
                    <i className="far fa-edit" />{" "}
                  </a>
                  <a href="#" className="action_btn">
                    {" "}
                    <i className="fas fa-trash" />{" "}
                  </a>
                </div>
              </div>
              <div className="single_user_pil admin_bg d-flex align-items-center justify-content-between">
                <div className="user_pils_thumb d-flex align-items-center">
                  <div className="thumb_34 mr_15 mt-0">
                    <img
                      className="img-fluid radius_50"
                      src="admin/img/customers/1.png"
                      alt=""
                    />
                  </div>
                  <span className="f_s_14 f_w_400 text_color_11">
                    Jhon Smith
                  </span>
                </div>
                <div className="user_info">Admin</div>
                <div className="action_btns d-flex">
                  <a href="#" className="action_btn mr_10">
                    {" "}
                    <i className="far fa-edit" />{" "}
                  </a>
                  <a href="#" className="action_btn">
                    {" "}
                    <i className="fas fa-trash" />{" "}
                  </a>
                </div>
              </div>
              <div className="single_user_pil d-flex align-items-center justify-content-between">
                <div className="user_pils_thumb d-flex align-items-center">
                  <div className="thumb_34 mr_15 mt-0">
                    <img
                      className="img-fluid radius_50"
                      src="admin/img/customers/1.png"
                      alt=""
                    />
                  </div>
                  <span className="f_s_14 f_w_400 text_color_11">
                    Jhon Smith
                  </span>
                </div>
                <div className="user_info">Customer</div>
                <div className="action_btns d-flex">
                  <a href="#" className="action_btn mr_10">
                    {" "}
                    <i className="far fa-edit" />{" "}
                  </a>
                  <a href="#" className="action_btn">
                    {" "}
                    <i className="fas fa-trash" />{" "}
                  </a>
                </div>
              </div>
              <div className="single_user_pil d-flex align-items-center justify-content-between">
                <div className="user_pils_thumb d-flex align-items-center">
                  <div className="thumb_34 mr_15 mt-0">
                    <img
                      className="img-fluid radius_50"
                      src="admin/img/customers/1.png"
                      alt=""
                    />
                  </div>
                  <span className="f_s_14 f_w_400 text_color_11">
                    Jhon Smith
                  </span>
                </div>
                <div className="user_info">Customer</div>
                <div className="action_btns d-flex">
                  <a href="#" className="action_btn mr_10">
                    {" "}
                    <i className="far fa-edit" />{" "}
                  </a>
                  <a href="#" className="action_btn">
                    {" "}
                    <i className="fas fa-trash" />{" "}
                  </a>
                </div>
              </div>
              <div className="single_user_pil d-flex align-items-center justify-content-between mb-0">
                <div className="user_pils_thumb d-flex align-items-center">
                  <div className="thumb_34 mr_15 mt-0">
                    <img
                      className="img-fluid radius_50"
                      src="admin/img/customers/1.png"
                      alt=""
                    />
                  </div>
                  <span className="f_s_14 f_w_400 text_color_11">
                    Jhon Smith
                  </span>
                </div>
                <div className="user_info">Customer</div>
                <div className="action_btns d-flex">
                  <a href="#" className="action_btn mr_10">
                    {" "}
                    <i className="far fa-edit" />{" "}
                  </a>
                  <a href="#" className="action_btn">
                    {" "}
                    <i className="fas fa-trash" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Sales of the last week</h3>
                </div>
                <div className="header_more_tool">
                  <div className="dropdown">
                    <span
                      className="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti-more-alt" />
                    </span>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-eye" /> Action
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="fas fa-edit" /> Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="fa fa-download" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <div id="chart-currently" />
              <div className="monthly_plan_wraper">
                <div className="single_plan d-flex align-items-center justify-content-between">
                  <div className="plan_left d-flex align-items-center">
                    <div className="thumb">
                      <img src="admin/img/icon2/7.svg" alt="" />
                    </div>
                    <div>
                      <h5>Most Sales</h5>
                      <span>Authors with the best sales</span>
                    </div>
                  </div>
                </div>
                <div className="single_plan d-flex align-items-center justify-content-between">
                  <div className="plan_left d-flex align-items-center">
                    <div className="thumb">
                      <img src="admin/img/icon2/6.svg" alt="" />
                    </div>
                    <div>
                      <h5>Total sales lead</h5>
                      <span>40% increased on week-to-week reports</span>
                    </div>
                  </div>
                </div>
                <div className="single_plan d-flex align-items-center justify-content-between">
                  <div className="plan_left d-flex align-items-center">
                    <div className="thumb">
                      <img src="admin/img/icon2/5.svg" alt="" />
                    </div>
                    <div>
                      <h5>Average Bestseller</h5>
                      <span>Pitstop Email Marketing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="white_card card_height_100 mb_30 overflow_hidden">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Sales Details</h3>
                </div>
                <div className="header_more_tool">
                  <div className="dropdown">
                    <span
                      className="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti-more-alt" />
                    </span>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-eye" /> Action
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="fas fa-edit" /> Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="fa fa-download" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="white_card_body pb-0">
              <div className="Sales_Details_plan">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single_plan d-flex align-items-center justify-content-between">
                      <div className="plan_left d-flex align-items-center">
                        <div className="thumb">
                          <img src="admin/img/icon2/3.svg" alt="" />
                        </div>
                        <div>
                          <h5>$2,034</h5>
                          <span>Author Sales</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single_plan d-flex align-items-center justify-content-between">
                      <div className="plan_left d-flex align-items-center">
                        <div className="thumb">
                          <img src="admin/img/icon2/1.svg" alt="" />
                        </div>
                        <div>
                          <h5>$706</h5>
                          <span>Commision</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single_plan d-flex align-items-center justify-content-between">
                      <div className="plan_left d-flex align-items-center">
                        <div className="thumb">
                          <img src="admin/img/icon2/4.svg" alt="" />
                        </div>
                        <div>
                          <h5>$49</h5>
                          <span>Average Bid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single_plan d-flex align-items-center justify-content-between">
                      <div className="plan_left d-flex align-items-center">
                        <div className="thumb">
                          <img src="admin/img/icon2/2.svg" alt="" />
                        </div>
                        <div>
                          <h5>$5.8M</h5>
                          <span>All Time Sales</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chart_wrap overflow_hidden">
              <div id="chart4" />
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="white_card card_height_100 mb_20 ">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">New Products</h3>
                </div>
                <div className="header_more_tool">
                  <div className="dropdown">
                    <span
                      className="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti-more-alt" />
                    </span>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-eye" /> Action
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="fas fa-edit" /> Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="fa fa-download" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="white_card_body QA_section">
              <div className="QA_table ">
                <table className="table lms_table_active2 p-0">
                  <thead>
                    <tr>
                      <th scope="col">Product 1</th>
                      <th scope="col">Price</th>
                      <th scope="col">Discount</th>
                      <th scope="col">Sold</th>
                      <th scope="col">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="customer d-flex align-items-center">
                          <div className="thumb_34 mr_15 mt-0">
                            <img
                              className="img-fluid radius_50"
                              src="admin/img/customers/pro_1.png"
                              alt=""
                            />
                          </div>
                          <span className="f_s_12 f_w_600 color_text_5">
                            Product 1
                          </span>
                        </div>
                      </td>
                      <td className="f_s_12 f_w_400 color_text_6">$564</td>
                      <td className="f_s_12 f_w_400 color_text_7">#DE2548</td>
                      <td className="f_s_12 f_w_400 color_text_6">60</td>
                      <td className="f_s_12 f_w_400 text-end">
                        <a href="#" className="text_color_1">
                          Google
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer d-flex align-items-center">
                          <div className="thumb_34 mr_15 mt-0">
                            <img
                              className="img-fluid radius_50"
                              src="admin/img/customers/pro_2.png"
                              alt=""
                            />
                          </div>
                          <span className="f_s_12 f_w_600 color_text_5">
                            Product 2
                          </span>
                        </div>
                      </td>
                      <td className="f_s_12 f_w_400 color_text_6">$564</td>
                      <td className="f_s_12 f_w_400 color_text_7">#DE2548</td>
                      <td className="f_s_12 f_w_400 color_text_6">60</td>
                      <td className="f_s_12 f_w_400 text-end">
                        <a href="#" className="text_color_2">
                          Direct
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer d-flex align-items-center">
                          <div className="thumb_34 mr_15 mt-0">
                            <img
                              className="img-fluid radius_50"
                              src="admin/img/customers/pro_3.png"
                              alt=""
                            />
                          </div>
                          <span className="f_s_12 f_w_600 color_text_5">
                            Product 3
                          </span>
                        </div>
                      </td>
                      <td className="f_s_12 f_w_400 color_text_6">$564</td>
                      <td className="f_s_12 f_w_400 color_text_7">#DE2548</td>
                      <td className="f_s_12 f_w_400 color_text_6">60</td>
                      <td className="f_s_12 f_w_400 text-end">
                        <a href="#" className="text_color_1">
                          Google
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer d-flex align-items-center">
                          <div className="thumb_34 mr_15 mt-0">
                            <img
                              className="img-fluid radius_50"
                              src="admin/img/customers/pro_4.png"
                              alt=""
                            />
                          </div>
                          <span className="f_s_12 f_w_600 color_text_5">
                            Product 4
                          </span>
                        </div>
                      </td>
                      <td className="f_s_12 f_w_400 color_text_6">$564</td>
                      <td className="f_s_12 f_w_400 color_text_7">#DE2548</td>
                      <td className="f_s_12 f_w_400 color_text_6">60</td>
                      <td className="f_s_12 f_w_400 text-end">
                        <a href="#" className="text_color_1">
                          Refferal
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer d-flex align-items-center">
                          <div className="thumb_34 mr_15 mt-0">
                            <img
                              className="img-fluid radius_50"
                              src="admin/img/customers/pro_5.png"
                              alt=""
                            />
                          </div>
                          <span className="f_s_12 f_w_600 color_text_5">
                            Product 5
                          </span>
                        </div>
                      </td>
                      <td className="f_s_12 f_w_400 color_text_6">$564</td>
                      <td className="f_s_12 f_w_400 color_text_7">#DE2548</td>
                      <td className="f_s_12 f_w_400 color_text_6">60</td>
                      <td className="f_s_12 f_w_400 text-end">
                        <a href="#" className="text_color_1">
                          20
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer d-flex align-items-center">
                          <div className="thumb_34 mr_15 mt-0">
                            <img
                              className="img-fluid radius_50"
                              src="admin/img/customers/pro_6.png"
                              alt=""
                            />
                          </div>
                          <span className="f_s_12 f_w_600 color_text_5">
                            Product 6
                          </span>
                        </div>
                      </td>
                      <td className="f_s_12 f_w_400 color_text_6">$564</td>
                      <td className="f_s_12 f_w_400 color_text_7">#DE2548</td>
                      <td className="f_s_12 f_w_400 color_text_6">60</td>
                      <td className="f_s_12 f_w_400 text-end">
                        <a href="#" className="text_color_5">
                          Direct
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer d-flex align-items-center">
                          <div className="thumb_34 mr_15 mt-0">
                            <img
                              className="img-fluid radius_50"
                              src="admin/img/customers/pro_6.png"
                              alt=""
                            />
                          </div>
                          <span className="f_s_12 f_w_600 color_text_5">
                            Product 6
                          </span>
                        </div>
                      </td>
                      <td className="f_s_12 f_w_400 color_text_6">$564</td>
                      <td className="f_s_12 f_w_400 color_text_7">#DE2548</td>
                      <td className="f_s_12 f_w_400 color_text_6">60</td>
                      <td className="f_s_12 f_w_400 text-end">
                        <a href="#" className="text_color_5">
                          Direct
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="white_card card_height_100  mb_20">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Visitors</h3>
                </div>
                <div className="header_more_tool">
                  <div className="dropdown">
                    <span
                      className="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti-more-alt" />
                    </span>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-eye" /> Action
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="fas fa-edit" /> Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="fa fa-download" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <div id="world-map-markers" className="dashboard_w_map pb_20" />
              <div className="world_list_wraper">
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single_progressbar">
                          <h6 className="f_s_14 f_w_400">USA</h6>
                          <div id="bar4" className="barfiller">
                            <div className="tipWrap">
                              <span className="tip" />
                            </div>
                            <span className="fill" data-percentage={81} />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single_progressbar">
                          <h6>Australia</h6>
                          <div id="bar5" className="barfiller">
                            <div className="tipWrap">
                              <span className="tip" />
                            </div>
                            <span className="fill" data-percentage={58} />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single_progressbar">
                          <h6>Brazil</h6>
                          <div id="bar6" className="barfiller">
                            <div className="tipWrap">
                              <span className="tip" />
                            </div>
                            <span className="fill" data-percentage={42} />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single_progressbar">
                          <h6>Latvia</h6>
                          <div id="bar7" className="barfiller">
                            <div className="tipWrap">
                              <span className="tip" />
                            </div>
                            <span className="fill" data-percentage={55} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="white_card card_height_100 mb_20 ">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Stoke Details</h3>
                </div>
                <div className="header_more_tool">
                  <div className="dropdown">
                    <span
                      className="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti-more-alt" />
                    </span>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-eye" /> Action
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="fas fa-edit" /> Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="fa fa-download" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="white_card_body QA_section">
              <div className="QA_table ">
                <table className="table lms_table_active2 p-0">
                  <thead>
                    <tr>
                      <th scope="col">Product Name</th>
                      <th scope="col">Market Price</th>
                      <th scope="col">Selling Price</th>
                      <th scope="col">Total Unite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="customer d-flex align-items-center">
                          <div className="thumb_34 mr_15 mt-0">
                            <img
                              className="img-fluid radius_50"
                              src="admin/img/customers/pro_1.png"
                              alt=""
                            />
                          </div>
                          <span className="f_s_12 f_w_600 color_text_5">
                            Product 1
                          </span>
                        </div>
                      </td>
                      <td className="f_s_12 f_w_400 color_text_6">$564</td>
                      <td className="f_s_12 f_w_400 color_text_6">$650</td>
                      <td className="f_s_12 f_w_400 text-center">
                        <a href="#" className="text_color_1">
                          20
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer d-flex align-items-center">
                          <div className="thumb_34 mr_15 mt-0">
                            <img
                              className="img-fluid radius_50"
                              src="admin/img/customers/pro_2.png"
                              alt=""
                            />
                          </div>
                          <span className="f_s_12 f_w_600 color_text_5">
                            Product 1
                          </span>
                        </div>
                      </td>
                      <td className="f_s_12 f_w_400 color_text_6">$564</td>
                      <td className="f_s_12 f_w_400 color_text_6">$650</td>
                      <td className="f_s_12 f_w_400 text-center">
                        <a href="#" className="text_color_1">
                          20
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer d-flex align-items-center">
                          <div className="thumb_34 mr_15 mt-0">
                            <img
                              className="img-fluid radius_50"
                              src="admin/img/customers/pro_3.png"
                              alt=""
                            />
                          </div>
                          <span className="f_s_12 f_w_600 color_text_5">
                            Product 1
                          </span>
                        </div>
                      </td>
                      <td className="f_s_12 f_w_400 color_text_6">$564</td>
                      <td className="f_s_12 f_w_400 color_text_6">$650</td>
                      <td className="f_s_12 f_w_400 text-center">
                        <a href="#" className="text_color_1">
                          20
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer d-flex align-items-center">
                          <div className="thumb_34 mr_15 mt-0">
                            <img
                              className="img-fluid radius_50"
                              src="admin/img/customers/pro_4.png"
                              alt=""
                            />
                          </div>
                          <span className="f_s_12 f_w_600 color_text_5">
                            Product 1
                          </span>
                        </div>
                      </td>
                      <td className="f_s_12 f_w_400 color_text_6">$564</td>
                      <td className="f_s_12 f_w_400 color_text_6">$650</td>
                      <td className="f_s_12 f_w_400 text-center">
                        <a href="#" className="color_text_6">
                          210
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer d-flex align-items-center">
                          <div className="thumb_34 mr_15 mt-0">
                            <img
                              className="img-fluid radius_50"
                              src="admin/img/customers/pro_5.png"
                              alt=""
                            />
                          </div>
                          <span className="f_s_12 f_w_600 color_text_5">
                            Product 1
                          </span>
                        </div>
                      </td>
                      <td className="f_s_12 f_w_400 color_text_6">$564</td>
                      <td className="f_s_12 f_w_400 color_text_6">$650</td>
                      <td className="f_s_12 f_w_400 text-center">
                        <a href="#" className="text_color_1">
                          210
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer d-flex align-items-center">
                          <div className="thumb_34 mr_15 mt-0">
                            <img
                              className="img-fluid radius_50"
                              src="admin/img/customers/pro_6.png"
                              alt=""
                            />
                          </div>
                          <span className="f_s_12 f_w_600 color_text_5">
                            Product 1
                          </span>
                        </div>
                      </td>
                      <td className="f_s_12 f_w_400 color_text_6">$564</td>
                      <td className="f_s_12 f_w_400 color_text_6">$650</td>
                      <td className="f_s_12 f_w_400 text-center">
                        <a href="#" className="text_color_5">
                          200
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="customer d-flex align-items-center">
                          <div className="thumb_34 mr_15 mt-0">
                            <img
                              className="img-fluid radius_50"
                              src="admin/img/customers/pro_6.png"
                              alt=""
                            />
                          </div>
                          <span className="f_s_12 f_w_600 color_text_5">
                            Product 1
                          </span>
                        </div>
                      </td>
                      <td className="f_s_12 f_w_400 color_text_6">$564</td>
                      <td className="f_s_12 f_w_400 color_text_6">$650</td>
                      <td className="f_s_12 f_w_400 text-center">
                        <a href="#" className="text_color_5">
                          200
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Recent activity</h3>
                </div>
                <div className="header_more_tool">
                  <div className="dropdown">
                    <span
                      className="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti-more-alt" />
                    </span>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-eye" /> Action
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="fas fa-edit" /> Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="fa fa-download" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <div className="Activity_timeline">
                <ul>
                  <li>
                    <div className="activity_bell" />
                    <div className="timeLine_inner d-flex align-items-center">
                      <div className="activity_wrap">
                        <h6>5 min ago</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="activity_bell " />
                    <div className="timeLine_inner d-flex align-items-center">
                      <div className="activity_wrap">
                        <h6>5 min ago</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="activity_bell bell_lite" />
                    <div className="timeLine_inner d-flex align-items-center">
                      <div className="activity_wrap">
                        <h6>5 min ago</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="activity_bell bell_lite" />
                    <div className="timeLine_inner d-flex align-items-center">
                      <div className="activity_wrap">
                        <h6>5 min ago</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque scelerisque
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="box_header m-0">
                <div className="main-title">
                  <h3 className="m-0">Member request to mail.</h3>
                </div>
                <div className="header_more_tool">
                  <div className="dropdown">
                    <span
                      className="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti-more-alt" />
                    </span>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-eye" /> Action
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="fas fa-edit" /> Edit
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="fa fa-download" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="white_card_body">
              <div className="thumb mb_30">
                <img src="admin/img/table.svg" alt="" className="img-fluid" />
              </div>
              <div className="common_form">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="common_input mb_15">
                        <input type="text" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="common_input mb_15">
                        <input type="text" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="common_input mb_15">
                        <input type="text" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <select className="nice_Select2 nice_Select_line wide">
                        <option value={1}>Role</option>
                        <option value={1}>Role 1</option>
                        <option value={1}>Role2</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <div className="create_report_btn mt_30">
                        <a
                          href="#"
                          className="btn_1 radius_btn d-block text-center"
                        >
                          Send the invitation link
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="white_card card_height_100 mb_30">
            <div className="white_card_header">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="main-title">
                    <h3 className="m-0">Stoke Details</h3>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row justify-content-end">
                    <div className="col-lg-8 d-flex justify-content-end">
                      <div className="serach_field-area theme_bg d-flex align-items-center">
                        <div className="search_inner">
                          <form action="#">
                            <div className="search_field">
                              <input type="text" placeholder="Search" />
                            </div>
                            <button type="submit">
                              {" "}
                              <img
                                src="admin/img/icon/icon_search.svg"
                                alt=""
                              />{" "}
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <select className="nice_Select2 wide">
                        <option value={1}>Show by All</option>
                        <option value={1}>Show by A</option>
                        <option value={1}>Show by B</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="white_card_body ">
              <div className="row min_height_oveflow">
                <div className="col-lg-4 mb_30">
                  <div className="single_user_pil d-flex align-items-center justify-content-between">
                    <div className="user_pils_thumb d-flex align-items-center">
                      <div className="thumb_34 mr_15 mt-0">
                        <img
                          className="img-fluid radius_50"
                          src="admin/img/customers/1.png"
                          alt=""
                        />
                      </div>
                      <span className="f_s_14 f_w_400 text_color_11">
                        Jhon Smith
                      </span>
                    </div>
                    <div className="user_info">Customer</div>
                    <div className="action_btns d-flex">
                      <a href="#" className="action_btn mr_10">
                        {" "}
                        <i className="far fa-edit" />{" "}
                      </a>
                      <a href="#" className="action_btn">
                        {" "}
                        <i className="fas fa-trash" />{" "}
                      </a>
                    </div>
                  </div>
                  <div className="single_user_pil admin_bg d-flex align-items-center justify-content-between">
                    <div className="user_pils_thumb d-flex align-items-center">
                      <div className="thumb_34 mr_15 mt-0">
                        <img
                          className="img-fluid radius_50"
                          src="admin/img/customers/1.png"
                          alt=""
                        />
                      </div>
                      <span className="f_s_14 f_w_400 text_color_11">
                        Jhon Smith
                      </span>
                    </div>
                    <div className="user_info">Admin</div>
                    <div className="action_btns d-flex">
                      <a href="#" className="action_btn mr_10">
                        {" "}
                        <i className="far fa-edit" />{" "}
                      </a>
                      <a href="#" className="action_btn">
                        {" "}
                        <i className="fas fa-trash" />{" "}
                      </a>
                    </div>
                  </div>
                  <div className="single_user_pil d-flex align-items-center justify-content-between">
                    <div className="user_pils_thumb d-flex align-items-center">
                      <div className="thumb_34 mr_15 mt-0">
                        <img
                          className="img-fluid radius_50"
                          src="admin/img/customers/1.png"
                          alt=""
                        />
                      </div>
                      <span className="f_s_14 f_w_400 text_color_11">
                        Jhon Smith
                      </span>
                    </div>
                    <div className="user_info">Customer</div>
                    <div className="action_btns d-flex">
                      <a href="#" className="action_btn mr_10">
                        {" "}
                        <i className="far fa-edit" />{" "}
                      </a>
                      <a href="#" className="action_btn">
                        {" "}
                        <i className="fas fa-trash" />{" "}
                      </a>
                    </div>
                  </div>
                  <div className="single_user_pil d-flex align-items-center justify-content-between">
                    <div className="user_pils_thumb d-flex align-items-center">
                      <div className="thumb_34 mr_15 mt-0">
                        <img
                          className="img-fluid radius_50"
                          src="admin/img/customers/1.png"
                          alt=""
                        />
                      </div>
                      <span className="f_s_14 f_w_400 text_color_11">
                        Jhon Smith
                      </span>
                    </div>
                    <div className="user_info">Customer</div>
                    <div className="action_btns d-flex">
                      <a href="#" className="action_btn mr_10">
                        {" "}
                        <i className="far fa-edit" />{" "}
                      </a>
                      <a href="#" className="action_btn">
                        {" "}
                        <i className="fas fa-trash" />{" "}
                      </a>
                    </div>
                  </div>
                  <div className="single_user_pil d-flex align-items-center justify-content-between">
                    <div className="user_pils_thumb d-flex align-items-center">
                      <div className="thumb_34 mr_15 mt-0">
                        <img
                          className="img-fluid radius_50"
                          src="admin/img/customers/1.png"
                          alt=""
                        />
                      </div>
                      <span className="f_s_14 f_w_400 text_color_11">
                        Jhon Smith
                      </span>
                    </div>
                    <div className="user_info">Customer</div>
                    <div className="action_btns d-flex">
                      <a href="#" className="action_btn mr_10">
                        {" "}
                        <i className="far fa-edit" />{" "}
                      </a>
                      <a href="#" className="action_btn">
                        {" "}
                        <i className="fas fa-trash" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb_30">
                  <div className="single_user_pil d-flex align-items-center justify-content-between">
                    <div className="user_pils_thumb d-flex align-items-center">
                      <div className="thumb_34 mr_15 mt-0">
                        <img
                          className="img-fluid radius_50"
                          src="admin/img/customers/1.png"
                          alt=""
                        />
                      </div>
                      <span className="f_s_14 f_w_400 text_color_11">
                        Jhon Smith
                      </span>
                    </div>
                    <div className="user_info">Customer</div>
                    <div className="action_btns d-flex">
                      <a href="#" className="action_btn mr_10">
                        {" "}
                        <i className="far fa-edit" />{" "}
                      </a>
                      <a href="#" className="action_btn">
                        {" "}
                        <i className="fas fa-trash" />{" "}
                      </a>
                    </div>
                  </div>
                  <div className="single_user_pil admin_bg d-flex align-items-center justify-content-between">
                    <div className="user_pils_thumb d-flex align-items-center">
                      <div className="thumb_34 mr_15 mt-0">
                        <img
                          className="img-fluid radius_50"
                          src="admin/img/customers/1.png"
                          alt=""
                        />
                      </div>
                      <span className="f_s_14 f_w_400 text_color_11">
                        Jhon Smith
                      </span>
                    </div>
                    <div className="user_info">Admin</div>
                    <div className="action_btns d-flex">
                      <a href="#" className="action_btn mr_10">
                        {" "}
                        <i className="far fa-edit" />{" "}
                      </a>
                      <a href="#" className="action_btn">
                        {" "}
                        <i className="fas fa-trash" />{" "}
                      </a>
                    </div>
                  </div>
                  <div className="single_user_pil d-flex align-items-center justify-content-between">
                    <div className="user_pils_thumb d-flex align-items-center">
                      <div className="thumb_34 mr_15 mt-0">
                        <img
                          className="img-fluid radius_50"
                          src="admin/img/customers/1.png"
                          alt=""
                        />
                      </div>
                      <span className="f_s_14 f_w_400 text_color_11">
                        Jhon Smith
                      </span>
                    </div>
                    <div className="user_info">Customer</div>
                    <div className="action_btns d-flex">
                      <a href="#" className="action_btn mr_10">
                        {" "}
                        <i className="far fa-edit" />{" "}
                      </a>
                      <a href="#" className="action_btn">
                        {" "}
                        <i className="fas fa-trash" />{" "}
                      </a>
                    </div>
                  </div>
                  <div className="single_user_pil d-flex align-items-center justify-content-between">
                    <div className="user_pils_thumb d-flex align-items-center">
                      <div className="thumb_34 mr_15 mt-0">
                        <img
                          className="img-fluid radius_50"
                          src="admin/img/customers/1.png"
                          alt=""
                        />
                      </div>
                      <span className="f_s_14 f_w_400 text_color_11">
                        Jhon Smith
                      </span>
                    </div>
                    <div className="user_info">Customer</div>
                    <div className="action_btns d-flex">
                      <a href="#" className="action_btn mr_10">
                        {" "}
                        <i className="far fa-edit" />{" "}
                      </a>
                      <a href="#" className="action_btn">
                        {" "}
                        <i className="fas fa-trash" />{" "}
                      </a>
                    </div>
                  </div>
                  <div className="single_user_pil d-flex align-items-center justify-content-between">
                    <div className="user_pils_thumb d-flex align-items-center">
                      <div className="thumb_34 mr_15 mt-0">
                        <img
                          className="img-fluid radius_50"
                          src="admin/img/customers/1.png"
                          alt=""
                        />
                      </div>
                      <span className="f_s_14 f_w_400 text_color_11">
                        Jhon Smith
                      </span>
                    </div>
                    <div className="user_info">Customer</div>
                    <div className="action_btns d-flex">
                      <a href="#" className="action_btn mr_10">
                        {" "}
                        <i className="far fa-edit" />{" "}
                      </a>
                      <a href="#" className="action_btn">
                        {" "}
                        <i className="fas fa-trash" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb_30">
                  <div className="single_user_pil d-flex align-items-center justify-content-between">
                    <div className="user_pils_thumb d-flex align-items-center">
                      <div className="thumb_34 mr_15 mt-0">
                        <img
                          className="img-fluid radius_50"
                          src="admin/img/customers/1.png"
                          alt=""
                        />
                      </div>
                      <span className="f_s_14 f_w_400 text_color_11">
                        Jhon Smith
                      </span>
                    </div>
                    <div className="user_info">Customer</div>
                    <div className="action_btns d-flex">
                      <a href="#" className="action_btn mr_10">
                        {" "}
                        <i className="far fa-edit" />{" "}
                      </a>
                      <a href="#" className="action_btn">
                        {" "}
                        <i className="fas fa-trash" />{" "}
                      </a>
                    </div>
                  </div>
                  <div className="single_user_pil admin_bg d-flex align-items-center justify-content-between">
                    <div className="user_pils_thumb d-flex align-items-center">
                      <div className="thumb_34 mr_15 mt-0">
                        <img
                          className="img-fluid radius_50"
                          src="admin/img/customers/1.png"
                          alt=""
                        />
                      </div>
                      <span className="f_s_14 f_w_400 text_color_11">
                        Jhon Smith
                      </span>
                    </div>
                    <div className="user_info">Admin</div>
                    <div className="action_btns d-flex">
                      <a href="#" className="action_btn mr_10">
                        {" "}
                        <i className="far fa-edit" />{" "}
                      </a>
                      <a href="#" className="action_btn">
                        {" "}
                        <i className="fas fa-trash" />{" "}
                      </a>
                    </div>
                  </div>
                  <div className="single_user_pil d-flex align-items-center justify-content-between">
                    <div className="user_pils_thumb d-flex align-items-center">
                      <div className="thumb_34 mr_15 mt-0">
                        <img
                          className="img-fluid radius_50"
                          src="admin/img/customers/1.png"
                          alt=""
                        />
                      </div>
                      <span className="f_s_14 f_w_400 text_color_11">
                        Jhon Smith
                      </span>
                    </div>
                    <div className="user_info">Customer</div>
                    <div className="action_btns d-flex">
                      <a href="#" className="action_btn mr_10">
                        {" "}
                        <i className="far fa-edit" />{" "}
                      </a>
                      <a href="#" className="action_btn">
                        {" "}
                        <i className="fas fa-trash" />{" "}
                      </a>
                    </div>
                  </div>
                  <div className="single_user_pil d-flex align-items-center justify-content-between">
                    <div className="user_pils_thumb d-flex align-items-center">
                      <div className="thumb_34 mr_15 mt-0">
                        <img
                          className="img-fluid radius_50"
                          src="admin/img/customers/1.png"
                          alt=""
                        />
                      </div>
                      <span className="f_s_14 f_w_400 text_color_11">
                        Jhon Smith
                      </span>
                    </div>
                    <div className="user_info">Customer</div>
                    <div className="action_btns d-flex">
                      <a href="#" className="action_btn mr_10">
                        {" "}
                        <i className="far fa-edit" />{" "}
                      </a>
                      <a href="#" className="action_btn">
                        {" "}
                        <i className="fas fa-trash" />{" "}
                      </a>
                    </div>
                  </div>
                  <div className="single_user_pil d-flex align-items-center justify-content-between">
                    <div className="user_pils_thumb d-flex align-items-center">
                      <div className="thumb_34 mr_15 mt-0">
                        <img
                          className="img-fluid radius_50"
                          src="admin/img/customers/1.png"
                          alt=""
                        />
                      </div>
                      <span className="f_s_14 f_w_400 text_color_11">
                        Jhon Smith
                      </span>
                    </div>
                    <div className="user_info">Customer</div>
                    <div className="action_btns d-flex">
                      <a href="#" className="action_btn mr_10">
                        {" "}
                        <i className="far fa-edit" />{" "}
                      </a>
                      <a href="#" className="action_btn">
                        {" "}
                        <i className="fas fa-trash" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="CHAT_MESSAGE_POPUPBOX">
        <div className="CHAT_POPUP_HEADER">
          <div className="MSEESAGE_CHATBOX_CLOSE">
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.09939 5.98831L11.772 10.661C12.076 10.965 12.076 11.4564 11.772 11.7603C11.468 12.0643 10.9766 12.0643 10.6726 11.7603L5.99994 7.08762L1.32737 11.7603C1.02329 12.0643 0.532002 12.0643 0.228062 11.7603C-0.0760207 11.4564 -0.0760207 10.965 0.228062 10.661L4.90063 5.98831L0.228062 1.3156C-0.0760207 1.01166 -0.0760207 0.520226 0.228062 0.216286C0.379534 0.0646715 0.578697 -0.0114918 0.777717 -0.0114918C0.976738 -0.0114918 1.17576 0.0646715 1.32737 0.216286L5.99994 4.889L10.6726 0.216286C10.8243 0.0646715 11.0233 -0.0114918 11.2223 -0.0114918C11.4213 -0.0114918 11.6203 0.0646715 11.772 0.216286C12.076 0.520226 12.076 1.01166 11.772 1.3156L7.09939 5.98831Z"
                fill="white"
              />
            </svg>
          </div>
          <h3>Chat with us</h3>
          <div className="Chat_Listed_member">
            <ul>
              <li>
                <a href="#">
                  <div className="member_thumb">
                    <img src="admin/img/staf/1.png" alt="" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="member_thumb">
                    <img src="admin/img/staf/2.png" alt="" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="member_thumb">
                    <img src="admin/img/staf/3.png" alt="" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="member_thumb">
                    <img src="admin/img/staf/4.png" alt="" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="member_thumb">
                    <img src="admin/img/staf/5.png" alt="" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="member_thumb">
                    <div className="more_member_count">
                      <span>90+</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="CHAT_POPUP_BODY">
          <p className="mesaged_send_date">Sunday, 12 January</p>
          <div className="CHATING_SENDER">
            <div className="SMS_thumb">
              <img src="admin/img/staf/1.png" alt="" />
            </div>
            <div className="SEND_SMS_VIEW">
              <p>Hi! Welcome . How can I help you?</p>
            </div>
          </div>
          <div className="CHATING_SENDER CHATING_RECEIVEr">
            <div className="SEND_SMS_VIEW">
              <p>Hello</p>
            </div>
            <div className="SMS_thumb">
              <img src="admin/img/staf/1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="CHAT_POPUP_BOTTOM">
          <div className="chat_input_box d-flex align-items-center">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Write your message"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn " type="button">
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.7821 3.21895C14.4908 -1.07281 7.50882 -1.07281 3.2183 3.21792C-1.07304 7.50864 -1.07263 14.4908 3.21872 18.7824C7.50882 23.0729 14.4908 23.0729 18.7817 18.7815C23.0726 14.4908 23.0724 7.50906 18.7821 3.21895ZM17.5813 17.5815C13.9525 21.2103 8.04773 21.2108 4.41871 17.5819C0.78907 13.9525 0.789485 8.04714 4.41871 4.41832C8.04752 0.789719 13.9521 0.789304 17.5817 4.41874C21.2105 8.04755 21.2101 13.9529 17.5813 17.5815ZM6.89503 8.02162C6.89503 7.31138 7.47107 6.73534 8.18131 6.73534C8.89135 6.73534 9.46739 7.31117 9.46739 8.02162C9.46739 8.73228 8.89135 9.30811 8.18131 9.30811C7.47107 9.30811 6.89503 8.73228 6.89503 8.02162ZM12.7274 8.02162C12.7274 7.31138 13.3038 6.73534 14.0141 6.73534C14.7241 6.73534 15.3002 7.31117 15.3002 8.02162C15.3002 8.73228 14.7243 9.30811 14.0141 9.30811C13.3038 9.30811 12.7274 8.73228 12.7274 8.02162ZM15.7683 13.2898C14.9712 15.1332 13.1043 16.3243 11.0126 16.3243C8.8758 16.3243 6.99792 15.1272 6.22834 13.2744C6.09642 12.9573 6.24681 12.593 6.56438 12.4611C6.64238 12.4289 6.72328 12.4136 6.80293 12.4136C7.04687 12.4136 7.27836 12.5577 7.37772 12.7973C7.95376 14.1842 9.38048 15.0799 11.0126 15.0799C12.6077 15.0799 14.0261 14.1836 14.626 12.7959C14.7625 12.4804 15.1288 12.335 15.4441 12.4717C15.7594 12.6084 15.9048 12.9745 15.7683 13.2898Z"
                      fill="#707DB7"
                    />
                  </svg>
                </button>
                <button className="btn" type="button">
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 0.289062C4.92455 0.289062 0 5.08402 0 10.9996C0 16.9152 4.92455 21.7101 11 21.7101C17.0755 21.7101 22 16.9145 22 10.9996C22 5.08472 17.0755 0.289062 11 0.289062ZM11 20.3713C5.68423 20.3713 1.375 16.1755 1.375 10.9996C1.375 5.82371 5.68423 1.62788 11 1.62788C16.3158 1.62788 20.625 5.82371 20.625 10.9996C20.625 16.1755 16.3158 20.3713 11 20.3713ZM15.125 10.3302H11.6875V6.98314C11.6875 6.61363 11.3795 6.31373 11 6.31373C10.6205 6.31373 10.3125 6.61363 10.3125 6.98314V10.3302H6.875C6.4955 10.3302 6.1875 10.6301 6.1875 10.9996C6.1875 11.3691 6.4955 11.669 6.875 11.669H10.3125V15.016C10.3125 15.3855 10.6205 15.6854 11 15.6854C11.3795 15.6854 11.6875 15.3855 11.6875 15.016V11.669H15.125C15.5045 11.669 15.8125 11.3691 15.8125 10.9996C15.8125 10.6301 15.5045 10.3302 15.125 10.3302Z"
                      fill="#707DB7"
                    />
                  </svg>
                  <input type="file" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="back-top" style={{ display: "none" }}>
        <a title="Go to Top" href="#">
          <i className="ti-angle-up" />
        </a>
      </div>
    </SuperadminLayout>
  );
}

export default SuperadminIndex;