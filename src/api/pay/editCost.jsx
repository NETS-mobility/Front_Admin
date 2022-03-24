import axios from "axios";
const EditCost = async (service_cost, service_extra, manager_extra) => {
  const servicePay = [
    {
      //이동거리 추가요금
      extra_cost_unit_value: service_extra.movement_cost.unit,
      extra_cost_per_unit_value: service_extra.movement_cost.value,
    },
    {
      //동행 추가요금 (예약 시)
      extra_cost_unit_value: service_extra.accompany_extra_cost.unit,
      extra_cost_per_unit_value: service_extra.accompany_extra_cost.value,
    },
    {
      //동행 추가요금 (초과 시)
      extra_cost_unit_value: service_extra.accompany_over_cost.unit,
      extra_cost_per_unit_value: service_extra.accompany_over_cost.value,
    },
    {
      //승차 지연 대기요금
      extra_cost_unit_value: service_extra.car_delay_cost.unit,
      extra_cost_per_unit_value: service_extra.car_delay_cost.value,
      extra_cost_max_unit_value: service_extra.car_delay_cost.max,
    },
    {
      //배차 지연 환불
      extra_cost_unit_value: service_extra.matching_delay_refund.unit,
      extra_cost_per_unit_value: service_extra.matching_delay_refund.value,
    },
    {
      //심야할증
      extra_cost_per_unit_value: service_extra.extra_cost_night.value,
    },
    {
      //주말할증
      extra_cost_per_unit_value: service_extra.extra_cost_weekend.value,
    },
  ];

  const managerPay = [
    {
      // 연장근로수당
      extra_pay_percentage: manager_extra.overtime.extra_pay_percentage,
      extra_pay_day_standard_time:
        manager_extra.overtime.extra_pay_day_standard_time,
      extra_pay_week_standard_time:
        manager_extra.overtime.extra_pay_week_standard_time,
    },
    {
      // 야간근로수당
      extra_pay_percentage: manager_extra.night.extra_pay_percentage,
      extra_pay_start_time: manager_extra.night.extra_pay_start_time,
      extra_pay_end_time: manager_extra.night.extra_pay_end_time,
    },
    {
      // 휴무일근로수당(토요일)
      extra_pay_percentage: manager_extra.saturday.extra_pay_percentage,
    },
    {
      // 휴일근로수당(빨간날)
      extra_pay_percentage: manager_extra.holiday.extra_pay_percentage,
    },
    {
      // 야간근무+연장근무
      extra_pay_percentage: manager_extra.night_overtime.extra_pay_percentage,
    },
    {
      // 휴일근무+연장근무
      extra_pay_percentage: manager_extra.holiday_overtime.extra_pay_percentage,
    },
    {
      // 휴일근무+연장근무+야간근무
      extra_pay_percentage:
        manager_extra.holiday_night_overtime.extra_pay_percentage,
    },
  ];

  const serviceCost = [
    {
      cost: service_cost.nets_move.cost,
      dist: service_cost.nets_move.dist,
      time: 0,
    },
    {
      cost: service_cost.nets_wheel_one_way.cost,
      dist: service_cost.nets_wheel_one_way.dist,
      time: service_cost.nets_wheel_one_way.time,
    },
    {
      cost: service_cost.nets_wheel_two_way.cost,
      dist: service_cost.nets_wheel_two_way.dist,
      time: service_cost.nets_wheel_two_way.time,
    },
    {
      cost: service_cost.nets_wheel_plus_one_way.cost,
      dist: service_cost.nets_wheel_plus_one_way.dist,
      time: service_cost.nets_wheel_plus_one_way.time,
    },
    {
      cost: service_cost.nets_wheel_plus_two_way.cost,
      dist: service_cost.nets_wheel_plus_two_way.dist,
      time: service_cost.nets_wheel_plus_two_way.time,
    },
  ];

  const combinedData = {
    service_cost: serviceCost,
    extra_cost: servicePay,
    extra_cost_night_time: {
      start: service_extra.extra_cost_night.start,
      end: service_extra.extra_cost_night.end,
    },
    manager_extra_pay: managerPay,
    jwtToken: localStorage.getItem("accessToken"),
  };

  console.log("combinedData", combinedData);

  try {
    const res = await axios.post("/admin/cost/extra/setting", combinedData);
    return res.status;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default EditCost;
