export const trips = [
  {
    id: 3591787,
    trip_id: "STY-1002384-64-A",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955631,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "13:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "14:39:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 29.79,
      is_toll_included: 0,
      route_id: 8507117,
      procedures: [
        {
          id: 7262354,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262355,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262356,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262357,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-02-28",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: "2023-02-28 13:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-02-28 13:15:00",
    scheduled_drop_off_timestamp: "2023-02-28 14:39:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-02-28 12:00:08",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 73,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 73,
      cost: 73,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 58.78,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591788,
    trip_id: "STY-1002384-64-B",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955632,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 2,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 23.35,
      is_toll_included: 0,
      route_id: 8507120,
      procedures: [
        {
          id: 7262358,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262359,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262360,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262361,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-02-28",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: null,
    scheduled_pick_up_timestamp_source: null,
    latest_pick_up_timestamp: null,
    scheduled_drop_off_timestamp: null,
    scheduled_drop_off_timestamp_source: null,
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 58.3,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 58.3,
      cost: 58.3,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 51.85,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591789,
    trip_id: "STY-1002384-65-A",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955631,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "13:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "14:39:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 29.79,
      is_toll_included: 0,
      route_id: 8507117,
      procedures: [
        {
          id: 7262354,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262355,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262356,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262357,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-01",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: "2023-03-01 13:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-01 13:15:00",
    scheduled_drop_off_timestamp: "2023-03-01 14:39:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-01 12:00:09",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 73,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 73,
      cost: 73,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 58.78,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591790,
    trip_id: "STY-1002384-65-B",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955632,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 2,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 23.35,
      is_toll_included: 0,
      route_id: 8507120,
      procedures: [
        {
          id: 7262358,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262359,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262360,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262361,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-01",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: null,
    scheduled_pick_up_timestamp_source: null,
    latest_pick_up_timestamp: null,
    scheduled_drop_off_timestamp: null,
    scheduled_drop_off_timestamp_source: null,
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 58.3,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 58.3,
      cost: 58.3,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 51.85,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591791,
    trip_id: "STY-1002384-66-A",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955631,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "13:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "14:39:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 29.79,
      is_toll_included: 0,
      route_id: 8507117,
      procedures: [
        {
          id: 7262354,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262355,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262356,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262357,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-02",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: "2023-03-02 13:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-02 13:15:00",
    scheduled_drop_off_timestamp: "2023-03-02 14:39:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-02 12:00:09",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 73,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 73,
      cost: 73,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 58.78,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591792,
    trip_id: "STY-1002384-66-B",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955632,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 2,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 23.35,
      is_toll_included: 0,
      route_id: 8507120,
      procedures: [
        {
          id: 7262358,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262359,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262360,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262361,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-02",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: null,
    scheduled_pick_up_timestamp_source: null,
    latest_pick_up_timestamp: null,
    scheduled_drop_off_timestamp: null,
    scheduled_drop_off_timestamp_source: null,
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 58.3,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 58.3,
      cost: 58.3,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 51.85,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: [
      {
        id: 73,
        note_topics: [],
        client: {
          id: 212
        },
        trip: {
          id: 3591792
        },
        trip_request: null,
        complaint: null,
        message: "PLEASE NOTE: This dataset, which includes all TLC licensed for-hire drivers which are in good standing and able to drive, is updated every day in the evening between 4-7pm. Please check the 'Last Update Date' field to make sure the list has updated successfully. 'Last Update Date' should show either today or yesterday's date, depending on the time of day. If the list is outdated, please download the most recent list from the link below. http://www1.nyc.gov/assets/tlc/downloads/datasets/tlc_for_hire_vehicle_drivers_active.csv NYC TLC Licensed FHV drivers that are currently active and in good standing. This list is accurate to the date and time represented in the Last Date Updated and Last Time Updated fields. For inquiries about the contents of this dataset, please email licensinginquiries@tlc.nyc.gov.PLEASE NOTE: This dataset, which includes all TLC licensed for-hire drivers which are in good standing and able to drive, is updated every day in the evening between 4-7pm. Please check the 'Last Update Date' field to make sure the list has updated successfully. 'Last Update Date' should show either today or yesterday's date, depending on the time of day. If the list is outdated, please download the most recent list from the link below. http://www1.nyc.gov/assets/tlc/downloads/datasets/tlc_for_hire_vehicle_drivers_active.csv NYC TLC Licensed FHV drivers that are currently active and in good standing. This list is accurate to the date and time represented in the Last Date Updated and Last Time Updated fields. For inquiries about the contents of this dataset, please email licensinginquiries@tlc.nyc.gov.PLEASE NOTE: This dataset, which includes all TLC licensed for-hire drivers which are in good standing and able to drive, is updated every day in the evening between 4-7pm. Please check the 'Last Update Date' field to make sure the list has updated successfully. 'Last Update Date' should show either today or yesterday's date, depending on the time of day. If the list is outdated, please download the most recent list from the link below. http://www1.nyc.gov/assets/tlc/downloads/datasets/tlc_for_hire_vehicle_drivers_active.csv NYC TLC Licensed FHV drivers that are currently active and in good standing. This list is accurate to the date and time represented in the Last Date Updated and Last Time Updated fields. For inquiries about the contents of this dataset, please email licensinginquiries@tlc.nyc.gov.fgsrrrrrrrrrrrrrrrrrrrradsgvdsagdfgfzghhn rdfhse rhrsehtdhtsrhgfhtsrhwtynwryeymnrtrtnASGSD gergherhgerghdrgdfgbfgdfgerahernybtrnhmenhrerymjhrjtyhtryhgPLEASE NOTE: This dataset, which includes all TLC licensed for-hire drivers which are in good standing and able to drive, is updated every day in the evening between 4-7pm. Please check the 'Last Update Date' field to make sure the list has updated successfully. 'Last Update Date' should show either today or yesterday's date, depending on the time of day. If the list is outdated, please download the most recent list from the link below. http://www1.nyc.gov/assets/tlc/downloads/datasets/tlc_for_hire_vehicle_drivers_active.csv NYC TLC Licensed FHV drivers that are currently active and in good standing. This list is accurate to the date and time represented in the Last Date Updated and Last Time Updated fields. For inquiries about the contents of this dataset, please email licensinginquiries@tlc.nyc.gov.dagartnrhbtdhgPLEASE NOTE: This dataset, which includes all TLC licensed for-hire drivers which are in good standing and able to drive, is updated every day in the evening between 4-7pm. Please check the 'Last Update Date' field to make sure the list has updated successfully. 'Last Update Date' should show either today or yesterday's date, depending on the time of day. If the list is outdated, please download the most recent list from the link below. http://www1.nyc.gov/assets/tlc/downloads/datasets/tlc_for_hire_vehicle_drivers_active.csv NYC TLC Licensed FHV drivers that are currently active and in good standing. This list is accurate to the date and time represented in the Last Date Updated and Last Time Updated fields. For inquiries about the contents of this dataset, please email licensinginquiries@tlc.nyc.gov.btrymnrthymunjtrmytersnhrtsbedPLEASE NOTE: This dataset, which includes all TLC licensed for-hire drivers which are in good standing and able to drive, is updated every day in the evening between 4-7pm. Please check the 'Last Update Date' field to make sure the list has updated successfully. 'Last Update Date' should show either today or yesterday's date, depending on the time of day. If the list is outdated, please download the most recent list from the link below. http://www1.nyc.gov/assets/tlc/downloads/datasets/tlc_for_hire_vehicle_drivers_active.csv NYC TLC Licensed FHV drivers that are currently active and in good standing. This list is accurate to the date and time represented in the Last Date Updated and Last Time Updated fields. Fogseeeeeeeeeeeeeeeeeeeeeeeh",
        is_pinned: 0,
        is_draft: 1,
        creator_user_account: {
          id: 228
        },
        creation_timestamp: "2023-03-01 13:58:32"
      }
    ]
  },
  {
    id: 3591793,
    trip_id: "STY-1002384-67-A",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955631,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "13:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "14:39:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 29.79,
      is_toll_included: 0,
      route_id: 8507117,
      procedures: [
        {
          id: 7262354,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262355,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262356,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262357,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-03",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: "2023-03-03 13:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-03 13:15:00",
    scheduled_drop_off_timestamp: "2023-03-03 14:39:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 5,
      name: "Failed: no suitable TP"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 73,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 73,
      cost: 73,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: "",
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 58.78,
      paid_amount: 0
    },
    transportation_provider: {
      id: 2,
      name: "TransCare Solutions Inc.",
      npi: "1326329954",
      email: "2testgisart@gmail.com",
      business_phone: "9119119111",
      business_fax: "7186766756",
      contact: {
        first_name: "Diana",
        last_name: "Gasparova",
        phone: "1367199319"
      },
      general_liability_insurance: {
        id: 67,
        document_url: "transportation_providers/2/credentials/general_liability_insurance.pdf",
        effective_date: "2018-08-15",
        expiration_date: "2022-05-19",
        status: {
          id: 2
        },
        rejection_reason: null,
        insurance_provider: "Hereford Insurance Company",
        policy_number: "BDG302067401",
        amount: 1000000,
        is_self_insured: 0,
        is_sentry_certificate_holder: 1,
        is_sentry_additional_insured: 1,
        is_specific_endorsement: 0
      }
    },
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Limited Drivers Only",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591794,
    trip_id: "STY-1002384-67-B",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955632,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 2,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 23.35,
      is_toll_included: 0,
      route_id: 8507120,
      procedures: [
        {
          id: 7262358,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262359,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262360,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262361,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-03",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: null,
    scheduled_pick_up_timestamp_source: null,
    latest_pick_up_timestamp: null,
    scheduled_drop_off_timestamp: null,
    scheduled_drop_off_timestamp_source: null,
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 58.3,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 58.3,
      cost: 58.3,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: "",
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 51.85,
      paid_amount: 0
    },
    transportation_provider: {
      id: 2,
      name: "TransCare Solutions Inc.",
      npi: "1326329954",
      email: "2testgisart@gmail.com",
      business_phone: "9119119111",
      business_fax: "7186766756",
      contact: {
        first_name: "Diana",
        last_name: "Gasparova",
        phone: "1367199319"
      },
      general_liability_insurance: {
        id: 67,
        document_url: "transportation_providers/2/credentials/general_liability_insurance.pdf",
        effective_date: "2018-08-15",
        expiration_date: "2022-05-19",
        status: {
          id: 2
        },
        rejection_reason: null,
        insurance_provider: "Hereford Insurance Company",
        policy_number: "BDG302067401",
        amount: 1000000,
        is_self_insured: 0,
        is_sentry_certificate_holder: 1,
        is_sentry_additional_insured: 1,
        is_specific_endorsement: 0
      }
    },
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Limited Drivers Only",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596849,
    trip_id: "STY-1005286-A",
    external_trip_id: 46343,
    request: {
      id: 1005286,
      external_trip_request_id: null,
      client: {
        id: 114195,
        client_id: "8108",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Thomas",
        middle_name: null,
        last_name: "Anderson",
        gender: null,
        birth_date: "1970-01-01",
        location: {
          id: 484336
        },
        phone: "7777777777",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: "7777777777",
        primary_language: {
          id: 131,
          name: "Unknown",
          iso_639_2b_code: null
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 115424,
            name: null,
            type: null,
            effective_date: "2022-02-09",
            expiration_date: null,
            service_level: null,
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 399,
            name: "MTA",
            npi: null,
            payer_id: null,
            location: null,
            business_phone: null,
            business_fax: null,
            alternate_phone: null,
            alternate_fax: null,
            contact: null,
            edi: {
              capabilities: {
                eligibility: null,
                remittance: 0,
                claim_status: 0
              },
              is_active: 1,
              is_production_mode: 0,
              is_supported: 0,
              service_place: null,
              supported_claim_types: null,
              version: null,
              sender_id: null,
              sender_qualifier: null,
              receiver_id: null,
              receiver_qualifier: null,
              icd_status: null,
              gs_qualifier: null,
              claim_file_name: null,
              claim_count_per_file: 0
            },
            is_quick_reservation_allowed: 0
          },
          number: null
        },
        secondary_insurance: null,
        notification: {
          preferred_method: {
            id: 2
          },
          sms_phone: "7777777777"
        },
        is_active: 1,
        passenger_type_id: 2,
        is_billing_allowed: 0,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2022-02-09 02:48:22"
      },
      is_standing_order: 0,
      type: {
        id: 6,
        name: "MTA"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960682,
      original_trip_leg: null,
      external_trip_id: 46343,
      order_number: 1,
      trip_reason: {
        id: 45,
        name: "Other - Non Medical"
      },
      trip_reason_description: "Unknown",
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: 2,
      facility_phone: "7777777777",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 1,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Brooklyn Hospital Center at Downtown",
          street_address: "121 Dekalb Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11201",
          zip_extension: "5429",
          formatted_address: "121 Dekalb Ave, Brooklyn, NY 11201, USA",
          coordinates: {
            lat: 40.69126,
            lng: -73.97777
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "7777777777",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "06:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 30,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Maimonides Medical Center",
          street_address: "4802 10th Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11219",
          zip_extension: "2916",
          formatted_address: "4802 10th Ave, Brooklyn, NY 11219, USA",
          coordinates: {
            lat: 40.63946,
            lng: -73.99836
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "06:58:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 4.81,
      is_toll_included: null,
      route_id: 8508177,
      procedures: [
        {
          id: 7272617,
          code: {
            id: 2777
          },
          negotiated_cost: null
        },
        {
          id: 7272618,
          code: {
            id: 2665
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-03",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "7777777777",
    scheduled_pick_up_timestamp: "2023-03-03 06:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-03 08:00:00",
    scheduled_drop_off_timestamp: "2023-03-03 06:58:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: "2023-03-03 06:00:00",
    pick_up_timestamp: "2023-03-03 06:00:00",
    pick_up_delay: null,
    drop_off_timestamp: "2023-03-03 07:00:00",
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 6,
      name: "Dropped off"
    },
    is_confirmed: 1,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: {
      timestamp: "2023-03-03 06:45:37",
      user_account: {
        id: 78966
      }
    },
    attestation: {
      status: {
        id: 2
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 5
      },
      rejection_reason: {
        id: 2
      },
      note: "Company::Pending:NEMT Provider Agreement,Business Associate Agreement,General Liability Insurance,Workers' Compensation,DOT License,Automobile Liability Insurance;Expired:Provider Audit;Rejected:TLC License Paratransit; Vehicle::Expired:DMV License,Ins..."
    },
    payment: {
      delivery_cost: 25.95,
      pick_up_arrival_cost: 5,
      bonus: 0,
      initial_cost: 25.95,
      cost: 0,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: "",
      cost_correction: -25.95,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 2
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 1
      },
      cost: 35.69,
      paid_amount: 0
    },
    transportation_provider: {
      id: 3,
      name: "Elegante (Livery)",
      npi: "1255560165",
      email: "3testgbvnisart@gmail.com",
      business_phone: "9304442721",
      business_fax: "3475075549",
      contact: {
        first_name: "Hamlet",
        last_name: "V",
        phone: "4189751925"
      },
      general_liability_insurance: {
        id: 78,
        document_url: "transportation_providers/3/credentials/general_liability_insurance.pdf",
        effective_date: "2016-04-01",
        expiration_date: "2017-04-01",
        status: {
          id: 1
        },
        rejection_reason: null,
        insurance_provider: "acord",
        policy_number: "cp157388c",
        amount: 2000000,
        is_self_insured: 0,
        is_sentry_certificate_holder: 0,
        is_sentry_additional_insured: 0,
        is_specific_endorsement: 0
      }
    },
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: {
      id: 32,
      vin: "4T1BF1FKXFU078417",
      fleet_number: "BK014",
      model: {
        id: 10090
      },
      type: {
        id: 1
      },
      color: {
        id: 5
      },
      production_year: 2015,
      status: {
        id: 1
      },
      dmv_registration: {
        id: 491,
        document_url: null,
        effective_date: null,
        expiration_date: "2017-05-31",
        status: {
          id: 4
        },
        rejection_reason: null,
        license_plate_number: "T672712C",
        license_state: {
          id: "NY"
        },
        vehicle_license_plate_category: {
          id: 3
        }
      }
    },
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: {
      id: 4,
      first_name: "ORLANDO",
      last_name: "MENDEZ",
      gender: {
        id: 1
      },
      phone: null,
      status: {
        id: 1
      },
      driver_license: {
        id: 152,
        document_url: null,
        effective_date: null,
        expiration_date: "2018-04-08",
        status: {
          id: 4
        },
        rejection_reason: null,
        number: "375350898",
        state: {
          id: "NY"
        },
        class: {
          id: 1
        },
        endorsements: [],
        restrictions: [],
        is_commercial: 1
      },
      drug_screen: {
        id: 502930,
        document_url: null,
        effective_date: "2022-02-03",
        expiration_date: null,
        status: {
          id: 2,
          name: "Approved"
        },
        rejection_reason: null
      },
      is_approved_for_mta: 0,
      covid_tracking: null
    },
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "No",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596850,
    trip_id: "STY-1005287-A",
    external_trip_id: 456467,
    request: {
      id: 1005287,
      external_trip_request_id: null,
      client: {
        id: 114195,
        client_id: "8108",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Thomas",
        middle_name: null,
        last_name: "Anderson",
        gender: null,
        birth_date: "1970-01-01",
        location: {
          id: 484336
        },
        phone: "7777777777",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: "7777777777",
        primary_language: {
          id: 131,
          name: "Unknown",
          iso_639_2b_code: null
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 115424,
            name: null,
            type: null,
            effective_date: "2022-02-09",
            expiration_date: null,
            service_level: null,
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 399,
            name: "MTA",
            npi: null,
            payer_id: null,
            location: null,
            business_phone: null,
            business_fax: null,
            alternate_phone: null,
            alternate_fax: null,
            contact: null,
            edi: {
              capabilities: {
                eligibility: null,
                remittance: 0,
                claim_status: 0
              },
              is_active: 1,
              is_production_mode: 0,
              is_supported: 0,
              service_place: null,
              supported_claim_types: null,
              version: null,
              sender_id: null,
              sender_qualifier: null,
              receiver_id: null,
              receiver_qualifier: null,
              icd_status: null,
              gs_qualifier: null,
              claim_file_name: null,
              claim_count_per_file: 0
            },
            is_quick_reservation_allowed: 0
          },
          number: null
        },
        secondary_insurance: null,
        notification: {
          preferred_method: {
            id: 2
          },
          sms_phone: "7777777777"
        },
        is_active: 1,
        passenger_type_id: 2,
        is_billing_allowed: 0,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2022-02-09 02:48:22"
      },
      is_standing_order: 0,
      type: {
        id: 6,
        name: "MTA"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960683,
      original_trip_leg: null,
      external_trip_id: 456467,
      order_number: 1,
      trip_reason: {
        id: 45,
        name: "Other - Non Medical"
      },
      trip_reason_description: "Unknown",
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: 2,
      facility_phone: "7777777777",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 1,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Brooklyn Hospital Center at Downtown",
          street_address: "121 Dekalb Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11201",
          zip_extension: "5429",
          formatted_address: "121 Dekalb Ave, Brooklyn, NY 11201, USA",
          coordinates: {
            lat: 40.69126,
            lng: -73.97777
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "7777777777",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "07:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 30,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Maimonides Medical Center",
          street_address: "4802 10th Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11219",
          zip_extension: "2916",
          formatted_address: "4802 10th Ave, Brooklyn, NY 11219, USA",
          coordinates: {
            lat: 40.63946,
            lng: -73.99836
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "07:58:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 4.81,
      is_toll_included: null,
      route_id: 8508177,
      procedures: [
        {
          id: 7272619,
          code: {
            id: 2777
          },
          negotiated_cost: null
        },
        {
          id: 7272620,
          code: {
            id: 2665
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-03",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "7777777777",
    scheduled_pick_up_timestamp: "2023-03-03 07:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-03 08:41:28",
    scheduled_drop_off_timestamp: "2023-03-03 07:58:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: "2023-03-03 06:00:00",
    pick_up_timestamp: "2023-03-03 06:00:00",
    pick_up_delay: null,
    drop_off_timestamp: "2023-03-03 07:00:00",
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 6,
      name: "Dropped off"
    },
    is_confirmed: 1,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: {
      timestamp: "2023-03-03 06:52:07",
      user_account: {
        id: 77754
      }
    },
    attestation: {
      status: {
        id: 2
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 4
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 25.95,
      pick_up_arrival_cost: 5,
      bonus: 0,
      initial_cost: 25.95,
      cost: 25.95,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: "",
      cost_correction: 0,
      status: {
        id: 1
      }
    },
    billing_authorization: {
      status: {
        id: 2
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 1
      },
      cost: 35.69,
      paid_amount: 0
    },
    transportation_provider: {
      id: 2,
      name: "TransCare Solutions Inc.",
      npi: "1326329954",
      email: "2testgisart@gmail.com",
      business_phone: "9119119111",
      business_fax: "7186766756",
      contact: {
        first_name: "Diana",
        last_name: "Gasparova",
        phone: "1367199319"
      },
      general_liability_insurance: {
        id: 67,
        document_url: "transportation_providers/2/credentials/general_liability_insurance.pdf",
        effective_date: "2018-08-15",
        expiration_date: "2022-05-19",
        status: {
          id: 2
        },
        rejection_reason: null,
        insurance_provider: "Hereford Insurance Company",
        policy_number: "BDG302067401",
        amount: 1000000,
        is_self_insured: 0,
        is_sentry_certificate_holder: 1,
        is_sentry_additional_insured: 1,
        is_specific_endorsement: 0
      }
    },
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: {
      id: 15,
      vin: "1FTNE1EW8EDA51000",
      fleet_number: "W-911",
      model: {
        id: 37162
      },
      type: {
        id: 3
      },
      color: {
        id: 4
      },
      production_year: 2014,
      status: {
        id: 1
      },
      dmv_registration: {
        id: 106,
        document_url: null,
        effective_date: null,
        expiration_date: "2018-05-31",
        status: {
          id: 4
        },
        rejection_reason: null,
        license_plate_number: "28909LV",
        license_state: {
          id: "NY"
        },
        vehicle_license_plate_category: {
          id: 2
        }
      }
    },
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: {
      id: 25686,
      first_name: null,
      last_name: null,
      gender: null,
      phone: null,
      status: {
        id: 1
      },
      driver_license: {
        id: 504064,
        document_url: null,
        effective_date: null,
        expiration_date: null,
        status: {
          id: 3
        },
        rejection_reason: "The Driver's License Number has the invalid format",
        number: "T94117030006932",
        state: null,
        class: null,
        endorsements: [],
        restrictions: [],
        is_commercial: 0
      },
      drug_screen: null,
      is_approved_for_mta: 0,
      covid_tracking: null
    },
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Ineligible Driver",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591795,
    trip_id: "STY-1002384-68-A",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955631,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "13:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "14:39:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 29.79,
      is_toll_included: 0,
      route_id: 8507117,
      procedures: [
        {
          id: 7262354,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262355,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262356,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262357,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-04",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: "2023-03-04 13:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-04 13:15:00",
    scheduled_drop_off_timestamp: "2023-03-04 14:39:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-04 12:00:11",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 73,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 73,
      cost: 73,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 58.78,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591796,
    trip_id: "STY-1002384-68-B",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955632,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 2,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 23.35,
      is_toll_included: 0,
      route_id: 8507120,
      procedures: [
        {
          id: 7262358,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262359,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262360,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262361,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-04",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: null,
    scheduled_pick_up_timestamp_source: null,
    latest_pick_up_timestamp: null,
    scheduled_drop_off_timestamp: null,
    scheduled_drop_off_timestamp_source: null,
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 58.3,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 58.3,
      cost: 58.3,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 51.85,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591797,
    trip_id: "STY-1002384-69-A",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955631,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "13:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "14:39:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 29.79,
      is_toll_included: 0,
      route_id: 8507117,
      procedures: [
        {
          id: 7262354,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262355,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262356,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262357,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-05",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: "2023-03-05 13:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-05 13:15:00",
    scheduled_drop_off_timestamp: "2023-03-05 14:39:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 5,
      name: "Failed: no suitable TP"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 74,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 73,
      cost: 74,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: "",
      cost_correction: 1,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 58.78,
      paid_amount: 0
    },
    transportation_provider: {
      id: 2,
      name: "TransCare Solutions Inc.",
      npi: "1326329954",
      email: "2testgisart@gmail.com",
      business_phone: "9119119111",
      business_fax: "7186766756",
      contact: {
        first_name: "Diana",
        last_name: "Gasparova",
        phone: "1367199319"
      },
      general_liability_insurance: {
        id: 67,
        document_url: "transportation_providers/2/credentials/general_liability_insurance.pdf",
        effective_date: "2018-08-15",
        expiration_date: "2022-05-19",
        status: {
          id: 2
        },
        rejection_reason: null,
        insurance_provider: "Hereford Insurance Company",
        policy_number: "BDG302067401",
        amount: 1000000,
        is_self_insured: 0,
        is_sentry_certificate_holder: 1,
        is_sentry_additional_insured: 1,
        is_specific_endorsement: 0
      }
    },
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Limited Drivers Only",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591798,
    trip_id: "STY-1002384-69-B",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955632,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 2,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 23.35,
      is_toll_included: 0,
      route_id: 8507120,
      procedures: [
        {
          id: 7262358,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262359,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262360,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262361,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-05",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: null,
    scheduled_pick_up_timestamp_source: null,
    latest_pick_up_timestamp: null,
    scheduled_drop_off_timestamp: null,
    scheduled_drop_off_timestamp_source: null,
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 58.3,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 58.3,
      cost: 58.3,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 51.85,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591799,
    trip_id: "STY-1002384-70-A",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955631,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "13:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "14:39:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 29.79,
      is_toll_included: 0,
      route_id: 8507117,
      procedures: [
        {
          id: 7262354,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262355,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262356,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262357,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-06",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: "2023-03-06 13:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-06 13:15:00",
    scheduled_drop_off_timestamp: "2023-03-06 14:39:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-06 12:00:06",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 73,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 73,
      cost: 73,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 58.78,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591800,
    trip_id: "STY-1002384-70-B",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955632,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 2,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 23.35,
      is_toll_included: 0,
      route_id: 8507120,
      procedures: [
        {
          id: 7262358,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262359,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262360,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262361,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-06",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: null,
    scheduled_pick_up_timestamp_source: null,
    latest_pick_up_timestamp: null,
    scheduled_drop_off_timestamp: null,
    scheduled_drop_off_timestamp_source: null,
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 58.3,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 58.3,
      cost: 58.3,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 51.85,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596851,
    trip_id: "STY-1005288-A",
    external_trip_id: null,
    request: {
      id: 1005288,
      external_trip_request_id: null,
      client: {
        id: 221,
        client_id: "0000221TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Margy",
        middle_name: null,
        last_name: "Di BiaggiTST",
        gender: {
          id: 2
        },
        birth_date: "1946-02-02",
        location: {
          id: 81674
        },
        phone: "9531448380",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 4,
          name: "Spanish",
          iso_639_2b_code: "spa"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 211,
            name: "CPL01",
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2020-07-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "9J18NA4MR53"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: {
          id: 14358,
          covid_status_info: {
            status: {
              id: 0,
              name: "Low Risk (Normal Transport)"
            },
            notes: "test",
            first_symptoms_date: "2021-07-05",
            recovery_date: null
          },
          vaccination: {
            is_present: 1,
            vaccine: {
              id: 1
            },
            first_dose_date: null,
            second_dose_date: null
          },
          covid_testing: {
            is_present: 1,
            status: {
              id: 1
            },
            date: null
          },
          has_pre_existing_conditions_of_disease: 0,
          high_fever: {
            is_present: 1,
            start_date: null
          },
          new_cough: {
            is_present: 0,
            start_date: null
          },
          shortness_of_breath: {
            is_present: 2,
            start_date: null
          },
          direct_contact_with_covid_carrier: {
            is_present: 1,
            date: null
          },
          travel_to_high_risk_location: {
            is_present: 0,
            date: null
          },
          temperature: null,
          is_cleared_for_covid_transport: null,
          last_update_at: "2021-07-05 09:22:56",
          last_update_user_account: {
            id: 78284
          }
        },
        last_update_timestamp: "2020-08-03 11:12:25"
      },
      is_standing_order: 0,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1960684,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 1,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "6666666666",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 81674,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "301 SUTTER AVE",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11212",
          zip_extension: "5600",
          formatted_address: "301 Sutter Ave, Brooklyn, NY 11212, USA",
          coordinates: {
            lat: 40.66774,
            lng: -73.90883
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "9531448380",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "00:48:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 1137,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "1231 Putnam Ave Apt 1",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11221",
          zip_extension: "4900",
          formatted_address: "1231 Putnam Ave #1, Brooklyn, NY 11221, USA",
          coordinates: {
            lat: 40.6916,
            lng: -73.91557
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "01:26:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 2.24,
      is_toll_included: 0,
      route_id: 8508178,
      procedures: [
        {
          id: 7272627,
          code: {
            id: 857
          },
          negotiated_cost: null
        },
        {
          id: 7272628,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7272629,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-06",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "9531448380",
    scheduled_pick_up_timestamp: "2023-03-06 00:48:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-06 02:48:00",
    scheduled_drop_off_timestamp: "2023-03-06 01:26:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 14.2,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 14.2,
      cost: 14.2,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 30.5,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 1
    },
    competitive_transportation_providers: [
      {
        id: 60,
        trip_id: 3596851,
        transportation_provider: {
          id: 2,
          name: "TransCare Solutions Inc."
        }
      }
    ],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596852,
    trip_id: "STY-1005288-B",
    external_trip_id: null,
    request: {
      id: 1005288,
      external_trip_request_id: null,
      client: {
        id: 221,
        client_id: "0000221TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Margy",
        middle_name: null,
        last_name: "Di BiaggiTST",
        gender: {
          id: 2
        },
        birth_date: "1946-02-02",
        location: {
          id: 81674
        },
        phone: "9531448380",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 4,
          name: "Spanish",
          iso_639_2b_code: "spa"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 211,
            name: "CPL01",
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2020-07-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "9J18NA4MR53"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: {
          id: 14358,
          covid_status_info: {
            status: {
              id: 0,
              name: "Low Risk (Normal Transport)"
            },
            notes: "test",
            first_symptoms_date: "2021-07-05",
            recovery_date: null
          },
          vaccination: {
            is_present: 1,
            vaccine: {
              id: 1
            },
            first_dose_date: null,
            second_dose_date: null
          },
          covid_testing: {
            is_present: 1,
            status: {
              id: 1
            },
            date: null
          },
          has_pre_existing_conditions_of_disease: 0,
          high_fever: {
            is_present: 1,
            start_date: null
          },
          new_cough: {
            is_present: 0,
            start_date: null
          },
          shortness_of_breath: {
            is_present: 2,
            start_date: null
          },
          direct_contact_with_covid_carrier: {
            is_present: 1,
            date: null
          },
          travel_to_high_risk_location: {
            is_present: 0,
            date: null
          },
          temperature: null,
          is_cleared_for_covid_transport: null,
          last_update_at: "2021-07-05 09:22:56",
          last_update_user_account: {
            id: 78284
          }
        },
        last_update_timestamp: "2020-08-03 11:12:25"
      },
      is_standing_order: 0,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1960685,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 2,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 1,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "6666666666",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 1137,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "1231 Putnam Ave Apt 1",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11221",
          zip_extension: "4900",
          formatted_address: "1231 Putnam Ave #1, Brooklyn, NY 11221, USA",
          coordinates: {
            lat: 40.6916,
            lng: -73.91557
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "9531448380",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 81674,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "301 SUTTER AVE",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11212",
          zip_extension: "5600",
          formatted_address: "301 Sutter Ave, Brooklyn, NY 11212, USA",
          coordinates: {
            lat: 40.66774,
            lng: -73.90883
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 2.13,
      is_toll_included: 0,
      route_id: 8508183,
      procedures: [
        {
          id: 7272630,
          code: {
            id: 857
          },
          negotiated_cost: null
        },
        {
          id: 7272631,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7272632,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-06",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "9531448380",
    scheduled_pick_up_timestamp: null,
    scheduled_pick_up_timestamp_source: null,
    latest_pick_up_timestamp: null,
    scheduled_drop_off_timestamp: null,
    scheduled_drop_off_timestamp_source: null,
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 14.2,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 14.2,
      cost: 14.2,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 30.5,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596853,
    trip_id: "STY-1005289-A",
    external_trip_id: null,
    request: {
      id: 1005289,
      external_trip_request_id: null,
      client: {
        id: 114323,
        client_id: "Unk114323",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [
          {
            id: 42,
            healthcare_provider_organization: {
              id: 11
            },
            medical_record_number: "234556"
          }
        ],
        first_name: "as",
        middle_name: null,
        last_name: "sa",
        gender: null,
        birth_date: "1970-01-01",
        location: {
          id: 484336
        },
        phone: "4564654576",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 131,
          name: "Unknown",
          iso_639_2b_code: null
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 115552,
            name: null,
            type: null,
            effective_date: "2022-08-08",
            expiration_date: null,
            service_level: null,
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 442,
            name: "NYCHHC",
            npi: "1376835819",
            payer_id: "1376835819",
            location: {
              street_address: "1901 1ST AVE",
              city: "NEW YORK",
              state: {
                id: "NY"
              },
              zip_code: "10029"
            },
            business_phone: "2124236262",
            business_fax: "1111111111",
            alternate_phone: null,
            alternate_fax: null,
            contact: {
              first_name: "Zhan",
              last_name: "SMG",
              phone: "1234567890"
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 0,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "NYCHHC",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{generationDateTime} {generationDate} {claimBatchID} {providerName}",
              claim_count_per_file: 0
            },
            is_quick_reservation_allowed: 1
          },
          number: null
        },
        secondary_insurance: null,
        notification: null,
        is_active: 1,
        passenger_type_id: 1,
        is_billing_allowed: 0,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2022-08-08 05:48:01"
      },
      is_standing_order: 0,
      type: {
        id: 4,
        name: "Quick"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960686,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 45,
        name: "Other - Non Medical"
      },
      trip_reason_description: "Unknown",
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: null,
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 1652,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "222 Mother Gaston Blvd",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11233",
          zip_extension: null,
          formatted_address: null,
          coordinates: {
            lat: 40.67399,
            lng: -73.90858
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "4564654576",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "12:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 41165,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "MIDWOOD MEDICAL PC",
          street_address: "2222 Coney Island Ave",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11223",
          zip_extension: "3208",
          formatted_address: "2222 Coney Island Ave, Brooklyn, NY 11223, USA",
          coordinates: {
            lat: 40.60275,
            lng: -73.96175
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "13:09:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 6.44,
      is_toll_included: 0,
      route_id: 8508184,
      procedures: [
        {
          id: 7272633,
          code: {
            id: 2778
          },
          negotiated_cost: null
        },
        {
          id: 7272634,
          code: {
            id: 2780
          },
          negotiated_cost: null
        },
        {
          id: 7272635,
          code: {
            id: 2782
          },
          negotiated_cost: null
        },
        {
          id: 7272636,
          code: {
            id: 2783
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-06",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "4564654576",
    scheduled_pick_up_timestamp: "2023-03-06 12:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-06 13:08:20",
    scheduled_drop_off_timestamp: "2023-03-06 13:09:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-06 11:10:07",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 23.6,
      pick_up_arrival_cost: 11,
      bonus: 0,
      initial_cost: 23.6,
      cost: 23.6,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 26,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 1
    },
    competitive_transportation_providers: [
      {
        id: 61,
        trip_id: 3596853,
        transportation_provider: {
          id: 2,
          name: "TransCare Solutions Inc."
        }
      }
    ],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596854,
    trip_id: "STY-1005290-A",
    external_trip_id: null,
    request: {
      id: 1005290,
      external_trip_request_id: null,
      client: {
        id: 107816,
        client_id: "Unk107816",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "0006279TST",
        middle_name: null,
        last_name: "gfhfdgh",
        gender: null,
        birth_date: "1970-01-01",
        location: {
          id: 484336
        },
        phone: "3456346345",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 131,
          name: "Unknown",
          iso_639_2b_code: null
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 109027,
            name: null,
            type: null,
            effective_date: "2021-08-10",
            expiration_date: "2021-08-19",
            service_level: null,
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 401,
            name: "Aetna Better Health",
            npi: "1841565156",
            payer_id: "40026",
            location: {
              street_address: "55 West 125th street",
              city: "new york",
              state: {
                id: "NY"
              },
              zip_code: "10027"
            },
            business_phone: "1122334455",
            business_fax: "8609028019",
            alternate_phone: "2222222222",
            alternate_fax: "8609028019",
            contact: {
              first_name: "Edgar",
              last_name: "Narvaez",
              phone: "3333333333"
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "837P",
              version: "00501",
              sender_id: "40026",
              sender_qualifier: "ZZ",
              receiver_id: "NYSOH-ENC",
              receiver_qualifier: "ZZ",
              icd_status: null,
              gs_qualifier: "HC",
              claim_file_name: "TR.NYE40026.837PM.W.{generationDateTime}.001.DAT",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: null
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 1,
        is_billing_allowed: 0,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-08-20 04:56:00"
      },
      is_standing_order: 0,
      type: {
        id: 4,
        name: "Quick"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960687,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 45,
        name: "Other - Non Medical"
      },
      trip_reason_description: "Unknown",
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: null,
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 1,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Brooklyn Hospital Center at Downtown",
          street_address: "121 Dekalb Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11201",
          zip_extension: "5429",
          formatted_address: "121 Dekalb Ave, Brooklyn, NY 11201, USA",
          coordinates: {
            lat: 40.69126,
            lng: -73.97777
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "3456346345",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "13:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 1137,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "1231 Putnam Ave Apt 1",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11221",
          zip_extension: "4900",
          formatted_address: "1231 Putnam Ave #1, Brooklyn, NY 11221, USA",
          coordinates: {
            lat: 40.6916,
            lng: -73.91557
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "13:58:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 3.81,
      is_toll_included: 0,
      route_id: 8508187,
      procedures: [
        {
          id: 7272637,
          code: {
            id: 2217
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-06",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "3456346345",
    scheduled_pick_up_timestamp: "2023-03-06 13:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-06 13:15:00",
    scheduled_drop_off_timestamp: "2023-03-06 13:58:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-06 12:00:10",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 10,
      pick_up_arrival_cost: 1,
      bonus: 0,
      initial_cost: 10,
      cost: 10,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 10,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 1
    },
    competitive_transportation_providers: [
      {
        id: 62,
        trip_id: 3596854,
        transportation_provider: {
          id: 2,
          name: "TransCare Solutions Inc."
        }
      }
    ],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596855,
    trip_id: "STY-1005291-A",
    external_trip_id: 534522,
    request: {
      id: 1005291,
      external_trip_request_id: null,
      client: {
        id: 114346,
        client_id: "testDev",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "testDev",
        middle_name: null,
        last_name: "testDev",
        gender: null,
        birth_date: "1970-01-01",
        location: {
          id: 484336
        },
        phone: "3454535334",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 131,
          name: "Unknown",
          iso_639_2b_code: null
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 115575,
            name: null,
            type: null,
            effective_date: "2022-12-01",
            expiration_date: null,
            service_level: null,
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 399,
            name: "MTA",
            npi: null,
            payer_id: null,
            location: null,
            business_phone: null,
            business_fax: null,
            alternate_phone: null,
            alternate_fax: null,
            contact: null,
            edi: {
              capabilities: {
                eligibility: null,
                remittance: 0,
                claim_status: 0
              },
              is_active: 1,
              is_production_mode: 0,
              is_supported: 0,
              service_place: null,
              supported_claim_types: null,
              version: null,
              sender_id: null,
              sender_qualifier: null,
              receiver_id: null,
              receiver_qualifier: null,
              icd_status: null,
              gs_qualifier: null,
              claim_file_name: null,
              claim_count_per_file: 0
            },
            is_quick_reservation_allowed: 0
          },
          number: null
        },
        secondary_insurance: null,
        notification: {
          preferred_method: {
            id: 2
          },
          sms_phone: "3454535334"
        },
        is_active: 1,
        passenger_type_id: 2,
        is_billing_allowed: 0,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2022-12-02 02:52:14"
      },
      is_standing_order: 0,
      type: {
        id: 6,
        name: "MTA"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960688,
      original_trip_leg: null,
      external_trip_id: 534522,
      order_number: 1,
      trip_reason: {
        id: 45,
        name: "Other - Non Medical"
      },
      trip_reason_description: "Unknown",
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: 1,
      facility_phone: "3454535334",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 1,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Brooklyn Hospital Center at Downtown",
          street_address: "121 Dekalb Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11201",
          zip_extension: "5429",
          formatted_address: "121 Dekalb Ave, Brooklyn, NY 11201, USA",
          coordinates: {
            lat: 40.69126,
            lng: -73.97777
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "3454535334",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "13:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 1137,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "1231 Putnam Ave Apt 1",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11221",
          zip_extension: "4900",
          formatted_address: "1231 Putnam Ave #1, Brooklyn, NY 11221, USA",
          coordinates: {
            lat: 40.6916,
            lng: -73.91557
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "13:58:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 3.81,
      is_toll_included: null,
      route_id: 8508187,
      procedures: [
        {
          id: 7272638,
          code: {
            id: 2777
          },
          negotiated_cost: null
        },
        {
          id: 7272639,
          code: {
            id: 2665
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-06",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "3454535334",
    scheduled_pick_up_timestamp: "2023-03-06 13:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-06 13:15:00",
    scheduled_drop_off_timestamp: "2023-03-06 13:58:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 1,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 22.15,
      pick_up_arrival_cost: 5,
      bonus: 0,
      initial_cost: 22.15,
      cost: 22.15,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 27.69,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 1
    },
    competitive_transportation_providers: [
      {
        id: 63,
        trip_id: 3596855,
        transportation_provider: {
          id: 2,
          name: "TransCare Solutions Inc."
        }
      }
    ],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591801,
    trip_id: "STY-1002384-71-A",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955631,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "13:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "14:39:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 29.79,
      is_toll_included: 0,
      route_id: 8507117,
      procedures: [
        {
          id: 7262354,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262355,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262356,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262357,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-07",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: "2023-03-07 13:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-07 13:15:00",
    scheduled_drop_off_timestamp: "2023-03-07 14:39:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-07 12:00:08",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 73,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 73,
      cost: 73,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 58.78,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591802,
    trip_id: "STY-1002384-71-B",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955632,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 2,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 23.35,
      is_toll_included: 0,
      route_id: 8507120,
      procedures: [
        {
          id: 7262358,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262359,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262360,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262361,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-07",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: null,
    scheduled_pick_up_timestamp_source: null,
    latest_pick_up_timestamp: null,
    scheduled_drop_off_timestamp: null,
    scheduled_drop_off_timestamp_source: null,
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 58.3,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 58.3,
      cost: 58.3,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 51.85,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596856,
    trip_id: "STY-1005292-A",
    external_trip_id: 56435634,
    request: {
      id: 1005292,
      external_trip_request_id: null,
      client: {
        id: 113865,
        client_id: "0000019TSL",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "test",
        middle_name: null,
        last_name: "client",
        gender: null,
        birth_date: "1970-01-01",
        location: {
          id: 484336
        },
        phone: "3333333333",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: "3333333333",
        primary_language: {
          id: 131,
          name: "Unknown",
          iso_639_2b_code: null
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 115088,
            name: null,
            type: null,
            effective_date: "2021-10-20",
            expiration_date: null,
            service_level: null,
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 399,
            name: "MTA",
            npi: null,
            payer_id: null,
            location: null,
            business_phone: null,
            business_fax: null,
            alternate_phone: null,
            alternate_fax: null,
            contact: null,
            edi: {
              capabilities: {
                eligibility: null,
                remittance: 0,
                claim_status: 0
              },
              is_active: 1,
              is_production_mode: 0,
              is_supported: 0,
              service_place: null,
              supported_claim_types: null,
              version: null,
              sender_id: null,
              sender_qualifier: null,
              receiver_id: null,
              receiver_qualifier: null,
              icd_status: null,
              gs_qualifier: null,
              claim_file_name: null,
              claim_count_per_file: 0
            },
            is_quick_reservation_allowed: 0
          },
          number: null
        },
        secondary_insurance: null,
        notification: {
          preferred_method: {
            id: 2
          },
          sms_phone: "3333333333"
        },
        is_active: 1,
        passenger_type_id: 2,
        is_billing_allowed: 0,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-10-20 06:14:48"
      },
      is_standing_order: 0,
      type: {
        id: 6,
        name: "MTA"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960689,
      original_trip_leg: null,
      external_trip_id: 56435634,
      order_number: 1,
      trip_reason: {
        id: 45,
        name: "Other - Non Medical"
      },
      trip_reason_description: "Unknown",
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: 1,
      facility_phone: "3333333333",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 1,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Brooklyn Hospital Center at Downtown",
          street_address: "121 Dekalb Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11201",
          zip_extension: "5429",
          formatted_address: "121 Dekalb Ave, Brooklyn, NY 11201, USA",
          coordinates: {
            lat: 40.69126,
            lng: -73.97777
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "3333333333",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "08:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 1137,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "1231 Putnam Ave Apt 1",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11221",
          zip_extension: "4900",
          formatted_address: "1231 Putnam Ave #1, Brooklyn, NY 11221, USA",
          coordinates: {
            lat: 40.6916,
            lng: -73.91557
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "09:02:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 3.81,
      is_toll_included: null,
      route_id: 8508190,
      procedures: [
        {
          id: 7272640,
          code: {
            id: 2777
          },
          negotiated_cost: null
        },
        {
          id: 7272641,
          code: {
            id: 2665
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-07",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "3333333333",
    scheduled_pick_up_timestamp: "2023-03-07 08:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-07 08:44:52",
    scheduled_drop_off_timestamp: "2023-03-07 09:02:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 1,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 22.15,
      pick_up_arrival_cost: 5,
      bonus: 0,
      initial_cost: 22.15,
      cost: 22.15,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 27.69,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 2
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591803,
    trip_id: "STY-1002384-72-A",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955631,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "13:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "14:39:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 29.79,
      is_toll_included: 0,
      route_id: 8507117,
      procedures: [
        {
          id: 7262354,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262355,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262356,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262357,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-08",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: "2023-03-08 13:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-08 13:15:00",
    scheduled_drop_off_timestamp: "2023-03-08 14:39:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-08 12:00:08",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 73,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 73,
      cost: 73,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 58.78,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591804,
    trip_id: "STY-1002384-72-B",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955632,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 2,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 23.35,
      is_toll_included: 0,
      route_id: 8507120,
      procedures: [
        {
          id: 7262358,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262359,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262360,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262361,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-08",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: "2023-03-08 07:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-08 07:15:00",
    scheduled_drop_off_timestamp: "2023-03-08 09:00:34",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-08 06:00:08",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 1,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 58.3,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 58.3,
      cost: 58.3,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 51.85,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591805,
    trip_id: "STY-1002384-73-A",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955631,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "13:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "14:39:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 29.79,
      is_toll_included: 0,
      route_id: 8507117,
      procedures: [
        {
          id: 7262354,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262355,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262356,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262357,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-09",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: "2023-03-09 13:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-09 13:15:00",
    scheduled_drop_off_timestamp: "2023-03-09 14:39:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-09 12:00:08",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 73,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 73,
      cost: 73,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 58.78,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591806,
    trip_id: "STY-1002384-73-B",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955632,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 2,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 23.35,
      is_toll_included: 0,
      route_id: 8507120,
      procedures: [
        {
          id: 7262358,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262359,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262360,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262361,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-09",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: null,
    scheduled_pick_up_timestamp_source: null,
    latest_pick_up_timestamp: null,
    scheduled_drop_off_timestamp: null,
    scheduled_drop_off_timestamp_source: null,
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 58.3,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 58.3,
      cost: 58.3,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 51.85,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591807,
    trip_id: "STY-1002384-74-A",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955631,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "13:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "14:39:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 29.79,
      is_toll_included: 0,
      route_id: 8507117,
      procedures: [
        {
          id: 7262354,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262355,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262356,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262357,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-10",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: "2023-03-10 13:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-10 13:15:00",
    scheduled_drop_off_timestamp: "2023-03-10 14:39:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-10 12:00:09",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 73,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 73,
      cost: 73,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 58.78,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3591808,
    trip_id: "STY-1002384-74-B",
    external_trip_id: null,
    request: {
      id: 1002384,
      external_trip_request_id: null,
      client: {
        id: 212,
        client_id: "0000212TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Mord",
        middle_name: null,
        last_name: "ArundaleTST",
        gender: {
          id: 1
        },
        birth_date: "1986-01-02",
        location: {
          id: 495367
        },
        phone: "5615944048",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 1,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 8,
          name: "ATB Car and Limo Service Inc."
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 202,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2019-03-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "2G70K81PE10"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2021-04-06 06:55:16"
      },
      is_standing_order: 1,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 2
    },
    leg: {
      id: 1955632,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 2,
      trip_reason: {
        id: 25,
        name: "Acupuncture"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 1,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: "7687687687",
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 6,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Franklin Hospital",
          street_address: "900 Franklin Avenue",
          building: null,
          apartment: null,
          city: "Valley Stream",
          state: {
            id: "NY"
          },
          county: {
            id: 30
          },
          zip: "11580",
          zip_extension: "2127",
          formatted_address: "900 Franklin Ave, Valley Stream, NY 11580, USA",
          coordinates: {
            lat: 40.68155,
            lng: -73.68628
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5615944048",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 495367,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "506 6th Avenue",
          building: null,
          apartment: "6A",
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11215",
          zip_extension: null,
          formatted_address: "506 6th Ave, Brooklyn, NY 11215, USA",
          coordinates: {
            lat: 40.66583,
            lng: -73.9861
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 23.35,
      is_toll_included: 0,
      route_id: 8507120,
      procedures: [
        {
          id: 7262358,
          code: {
            id: 858
          },
          negotiated_cost: null
        },
        {
          id: 7262359,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7262360,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7262361,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-10",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5615944048",
    scheduled_pick_up_timestamp: null,
    scheduled_pick_up_timestamp_source: null,
    latest_pick_up_timestamp: null,
    scheduled_drop_off_timestamp: null,
    scheduled_drop_off_timestamp_source: null,
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 58.3,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 58.3,
      cost: 58.3,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 51.85,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596857,
    trip_id: "STY-1005293-A",
    external_trip_id: null,
    request: {
      id: 1005293,
      external_trip_request_id: null,
      client: {
        id: 108426,
        client_id: "ZZ69922T",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "AIDA",
        middle_name: null,
        last_name: "ACEVEDO",
        gender: {
          id: 2
        },
        birth_date: "1933-08-17",
        location: {
          id: 492499
        },
        phone: "7182669104",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 4,
          name: "Spanish",
          iso_639_2b_code: "spa"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 109639,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2017-07-01",
            expiration_date: null,
            service_level: null,
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 401,
            name: "Aetna Better Health",
            npi: "1841565156",
            payer_id: "40026",
            location: {
              street_address: "55 West 125th street",
              city: "new york",
              state: {
                id: "NY"
              },
              zip_code: "10027"
            },
            business_phone: "1122334455",
            business_fax: "8609028019",
            alternate_phone: "2222222222",
            alternate_fax: "8609028019",
            contact: {
              first_name: "Edgar",
              last_name: "Narvaez",
              phone: "3333333333"
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "837P",
              version: "00501",
              sender_id: "40026",
              sender_qualifier: "ZZ",
              receiver_id: "NYSOH-ENC",
              receiver_qualifier: "ZZ",
              icd_status: null,
              gs_qualifier: "HC",
              claim_file_name: "TR.NYE40026.837PM.W.{generationDateTime}.001.DAT",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: null
        },
        secondary_insurance: null,
        notification: null,
        is_active: 1,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2022-06-06 11:07:52"
      },
      is_standing_order: 0,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960690,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 10,
        name: "Dental"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: null,
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 492499,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "2940 WEST 33RD ST 8A",
          building: null,
          apartment: null,
          city: "BROOKLYN",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11224",
          zip_extension: null,
          formatted_address: "2940 W 33rd St #8A, Brooklyn, NY 11224, USA",
          coordinates: {
            lat: 40.57403,
            lng: -73.99989
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "7182669104",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 13,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Kings County Hospital",
          street_address: "451 Clarkson Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11203",
          zip_extension: "2026",
          formatted_address: "451 Clarkson Ave, Brooklyn, NY 11203, USA",
          coordinates: {
            lat: 40.65672,
            lng: -73.94617
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 11.6,
      is_toll_included: 0,
      route_id: 8508193,
      procedures: [
        {
          id: 7272642,
          code: {
            id: 322
          },
          negotiated_cost: null
        },
        {
          id: 7272643,
          code: {
            id: 358
          },
          negotiated_cost: null
        },
        {
          id: 7272644,
          code: {
            id: 335
          },
          negotiated_cost: null
        },
        {
          id: 7272645,
          code: {
            id: 340
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-14",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "7182669104",
    scheduled_pick_up_timestamp: "2023-03-14 05:58:59",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-14 11:38:50",
    scheduled_drop_off_timestamp: "2023-03-14 12:50:03",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-14 09:48:03",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 1,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 35.2,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 35.2,
      cost: 35.2,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 47.84,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596858,
    trip_id: "STY-1005294-A",
    external_trip_id: null,
    request: {
      id: 1005294,
      external_trip_request_id: null,
      client: {
        id: 2323,
        client_id: "0002323TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Brett",
        middle_name: null,
        last_name: "BarrowcloughTST",
        gender: {
          id: 1
        },
        birth_date: "1997-04-13",
        location: {
          id: 82090
        },
        phone: "6385102371",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 27,
          name: "Bengali",
          iso_639_2b_code: "ben"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 1207,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-08-01",
            expiration_date: "2017-01-29",
            service_level: {
              id: 2
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: null
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: {
          id: 14361,
          covid_status_info: {
            status: {
              id: 2,
              name: "High Risk (Special Transport)"
            },
            notes: "234234",
            first_symptoms_date: "2021-07-06",
            recovery_date: null
          },
          vaccination: {
            is_present: 0,
            vaccine: null,
            first_dose_date: null,
            second_dose_date: null
          },
          covid_testing: {
            is_present: 2,
            status: null,
            date: null
          },
          has_pre_existing_conditions_of_disease: 2,
          high_fever: {
            is_present: 2,
            start_date: null
          },
          new_cough: {
            is_present: 2,
            start_date: null
          },
          shortness_of_breath: {
            is_present: 2,
            start_date: null
          },
          direct_contact_with_covid_carrier: {
            is_present: 2,
            date: null
          },
          travel_to_high_risk_location: {
            is_present: 2,
            date: null
          },
          temperature: null,
          is_cleared_for_covid_transport: null,
          last_update_at: "2021-07-06 05:50:12",
          last_update_user_account: {
            id: 77776
          }
        },
        last_update_timestamp: "2020-04-22 18:57:55"
      },
      is_standing_order: 0,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960691,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 10,
        name: "Dental"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: null,
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 82090,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "544 Taylor Avenue",
          building: null,
          apartment: null,
          city: "Bronx",
          state: {
            id: "NY"
          },
          county: {
            id: 3
          },
          zip: "10473",
          zip_extension: null,
          formatted_address: null,
          coordinates: {
            lat: 40.81632,
            lng: -73.86152
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "6385102371",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "06:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 13,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Kings County Hospital",
          street_address: "451 Clarkson Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11203",
          zip_extension: "2026",
          formatted_address: "451 Clarkson Ave, Brooklyn, NY 11203, USA",
          coordinates: {
            lat: 40.65672,
            lng: -73.94617
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "07:59:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 19.36,
      is_toll_included: 1,
      route_id: 8508196,
      procedures: [
        {
          id: 7272656,
          code: {
            id: 857
          },
          negotiated_cost: null
        },
        {
          id: 7272657,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7272658,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7272659,
          code: {
            id: 32
          },
          negotiated_cost: null
        },
        {
          id: 7272660,
          code: {
            id: 767
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-14",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "6385102371",
    scheduled_pick_up_timestamp: "2023-03-14 06:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-14 11:54:30",
    scheduled_drop_off_timestamp: "2023-03-14 07:59:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 56.02,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 56.02,
      cost: 56.02,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 41.39,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 1,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596859,
    trip_id: "STY-1005295-A",
    external_trip_id: null,
    request: {
      id: 1005295,
      external_trip_request_id: null,
      client: {
        id: 287,
        client_id: "0000287TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Donny",
        middle_name: null,
        last_name: "CarolineTST",
        gender: {
          id: 2
        },
        birth_date: "1986-02-24",
        location: {
          id: 80308
        },
        phone: "3169623346",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 15,
          name: "Russian",
          iso_639_2b_code: "rus"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [
          {
            id: 37
          },
          {
            id: 44
          },
          {
            id: 48
          },
          {
            id: 59
          },
          {
            id: 71
          },
          {
            id: 76
          },
          {
            id: 78
          },
          {
            id: 98
          },
          {
            id: 105
          },
          {
            id: 130
          },
          {
            id: 135
          },
          {
            id: 155
          },
          {
            id: 184
          },
          {
            id: 185
          },
          {
            id: 234
          },
          {
            id: 241
          },
          {
            id: 247
          },
          {
            id: 254
          },
          {
            id: 336
          },
          {
            id: 355
          },
          {
            id: 356
          }
        ],
        benefit_plans: [
          {
            id: 277,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2016-09-01",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "094808023M"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2020-04-22 18:57:55"
      },
      is_standing_order: 0,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960692,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 10,
        name: "Dental"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: null,
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 80308,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "2462 West Street",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11223",
          zip_extension: null,
          formatted_address: null,
          coordinates: {
            lat: 40.58903,
            lng: -73.97023
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "3169623346",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "05:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 13,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Kings County Hospital",
          street_address: "451 Clarkson Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11203",
          zip_extension: "2026",
          formatted_address: "451 Clarkson Ave, Brooklyn, NY 11203, USA",
          coordinates: {
            lat: 40.65672,
            lng: -73.94617
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "06:20:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 6.05,
      is_toll_included: 0,
      route_id: 8508202,
      procedures: [
        {
          id: 7272667,
          code: {
            id: 857
          },
          negotiated_cost: null
        },
        {
          id: 7272668,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7272669,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-14",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "3169623346",
    scheduled_pick_up_timestamp: "2023-03-14 05:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-14 12:06:10",
    scheduled_drop_off_timestamp: "2023-03-14 06:20:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-14 10:09:05",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 22.6,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 22.6,
      cost: 22.6,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 30.5,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596860,
    trip_id: "STY-1005296-A",
    external_trip_id: null,
    request: {
      id: 1005296,
      external_trip_request_id: null,
      client: {
        id: 108426,
        client_id: "ZZ69922T",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "AIDA",
        middle_name: null,
        last_name: "ACEVEDO",
        gender: {
          id: 2
        },
        birth_date: "1933-08-17",
        location: {
          id: 492499
        },
        phone: "7182669104",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 4,
          name: "Spanish",
          iso_639_2b_code: "spa"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 109639,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2017-07-01",
            expiration_date: null,
            service_level: null,
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 401,
            name: "Aetna Better Health",
            npi: "1841565156",
            payer_id: "40026",
            location: {
              street_address: "55 West 125th street",
              city: "new york",
              state: {
                id: "NY"
              },
              zip_code: "10027"
            },
            business_phone: "1122334455",
            business_fax: "8609028019",
            alternate_phone: "2222222222",
            alternate_fax: "8609028019",
            contact: {
              first_name: "Edgar",
              last_name: "Narvaez",
              phone: "3333333333"
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "837P",
              version: "00501",
              sender_id: "40026",
              sender_qualifier: "ZZ",
              receiver_id: "NYSOH-ENC",
              receiver_qualifier: "ZZ",
              icd_status: null,
              gs_qualifier: "HC",
              claim_file_name: "TR.NYE40026.837PM.W.{generationDateTime}.001.DAT",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: null
        },
        secondary_insurance: null,
        notification: null,
        is_active: 1,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2022-06-06 11:07:52"
      },
      is_standing_order: 0,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960693,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 45,
        name: "Other - Non Medical"
      },
      trip_reason_description: "=-0-0909",
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: null,
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 492499,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "2940 WEST 33RD ST 8A",
          building: null,
          apartment: null,
          city: "BROOKLYN",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11224",
          zip_extension: null,
          formatted_address: "2940 W 33rd St #8A, Brooklyn, NY 11224, USA",
          coordinates: {
            lat: 40.57403,
            lng: -73.99989
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "7182669104",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "02:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 1,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Brooklyn Hospital Center at Downtown",
          street_address: "121 Dekalb Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11201",
          zip_extension: "5429",
          formatted_address: "121 Dekalb Ave, Brooklyn, NY 11201, USA",
          coordinates: {
            lat: 40.69126,
            lng: -73.97777
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "03:05:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 13.35,
      is_toll_included: 0,
      route_id: 8508211,
      procedures: [
        {
          id: 7272674,
          code: {
            id: 322
          },
          negotiated_cost: null
        },
        {
          id: 7272675,
          code: {
            id: 358
          },
          negotiated_cost: null
        },
        {
          id: 7272676,
          code: {
            id: 335
          },
          negotiated_cost: null
        },
        {
          id: 7272677,
          code: {
            id: 340
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-15",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "7182669104",
    scheduled_pick_up_timestamp: "2023-03-14 16:58:59",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-14 17:13:59",
    scheduled_drop_off_timestamp: "2023-03-15 03:05:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-14 16:46:06",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 1,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 37.3,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 37.3,
      cost: 37.3,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 51.05,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596861,
    trip_id: "STY-1005297-A",
    external_trip_id: null,
    request: {
      id: 1005297,
      external_trip_request_id: null,
      client: {
        id: 108426,
        client_id: "ZZ69922T",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "AIDA",
        middle_name: null,
        last_name: "ACEVEDO",
        gender: {
          id: 2
        },
        birth_date: "1933-08-17",
        location: {
          id: 492499
        },
        phone: "7182669104",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 4,
          name: "Spanish",
          iso_639_2b_code: "spa"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 109639,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2017-07-01",
            expiration_date: null,
            service_level: null,
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 401,
            name: "Aetna Better Health",
            npi: "1841565156",
            payer_id: "40026",
            location: {
              street_address: "55 West 125th street",
              city: "new york",
              state: {
                id: "NY"
              },
              zip_code: "10027"
            },
            business_phone: "1122334455",
            business_fax: "8609028019",
            alternate_phone: "2222222222",
            alternate_fax: "8609028019",
            contact: {
              first_name: "Edgar",
              last_name: "Narvaez",
              phone: "3333333333"
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "837P",
              version: "00501",
              sender_id: "40026",
              sender_qualifier: "ZZ",
              receiver_id: "NYSOH-ENC",
              receiver_qualifier: "ZZ",
              icd_status: null,
              gs_qualifier: "HC",
              claim_file_name: "TR.NYE40026.837PM.W.{generationDateTime}.001.DAT",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: null
        },
        secondary_insurance: null,
        notification: null,
        is_active: 1,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2022-06-06 11:07:52"
      },
      is_standing_order: 0,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960694,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 87,
        name: "Cardiologist"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: null,
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 492499,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "2940 WEST 33RD ST 8A",
          building: null,
          apartment: null,
          city: "BROOKLYN",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11224",
          zip_extension: null,
          formatted_address: "2940 W 33rd St #8A, Brooklyn, NY 11224, USA",
          coordinates: {
            lat: 40.57403,
            lng: -73.99989
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "7182669104",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 1,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Brooklyn Hospital Center at Downtown",
          street_address: "121 Dekalb Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11201",
          zip_extension: "5429",
          formatted_address: "121 Dekalb Ave, Brooklyn, NY 11201, USA",
          coordinates: {
            lat: 40.69126,
            lng: -73.97777
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 10.59,
      is_toll_included: 0,
      route_id: 8508209,
      procedures: [
        {
          id: 7272678,
          code: {
            id: 322
          },
          negotiated_cost: null
        },
        {
          id: 7272679,
          code: {
            id: 358
          },
          negotiated_cost: null
        },
        {
          id: 7272680,
          code: {
            id: 335
          },
          negotiated_cost: null
        },
        {
          id: 7272681,
          code: {
            id: 340
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-15",
    sentry_notes: "345555",
    notes_from_provider: null,
    phone: "7182669104",
    scheduled_pick_up_timestamp: "2023-03-15 04:58:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-15 05:13:00",
    scheduled_drop_off_timestamp: "2023-03-15 06:47:46",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-15 03:58:08",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 1,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 33.1,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 33.1,
      cost: 33.1,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 44.63,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596862,
    trip_id: "STY-1005298-A",
    external_trip_id: null,
    request: {
      id: 1005298,
      external_trip_request_id: null,
      client: {
        id: 4457,
        client_id: "0004457TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Bartholomeo",
        middle_name: null,
        last_name: "AmblerTST",
        gender: {
          id: 1
        },
        birth_date: "1957-07-30",
        location: {
          id: 236348
        },
        phone: "2222222222",
        phone_ext: "22222",
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 4,
          name: "Spanish",
          iso_639_2b_code: "spa"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: {
          id: 15,
          name: "NXK Corp DBA Ambu-Trans Ambulette"
        },
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: {
          id: 15,
          name: "NXK Corp DBA Ambu-Trans Ambulette"
        },
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 2003,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-09-01",
            expiration_date: "2018-07-12",
            service_level: {
              id: 2
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "094749689A"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2020-12-18 02:24:23"
      },
      is_standing_order: 0,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960695,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 62,
        name: "Developmental Disability"
      },
      trip_reason_description: null,
      service_level: {
        id: 2,
        code: "AMBA",
        name: "Ambulette (Ambulatory)",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: null,
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 236348,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "975 East 179th Street",
          building: null,
          apartment: "7C",
          city: "Bronx",
          state: {
            id: "NY"
          },
          county: {
            id: 3
          },
          zip: "10460",
          zip_extension: "2222",
          formatted_address: "975 E 179th St, Bronx, NY 10460, USA",
          coordinates: {
            lat: 40.84263,
            lng: -73.8805
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "2222222222",
        phone_ext: "22222",
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 13,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Kings County Hospital",
          street_address: "451 Clarkson Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11203",
          zip_extension: "2026",
          formatted_address: "451 Clarkson Ave, Brooklyn, NY 11203, USA",
          coordinates: {
            lat: 40.65672,
            lng: -73.94617
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 20.15,
      is_toll_included: 1,
      route_id: 8508214,
      procedures: [
        {
          id: 7272686,
          code: {
            id: 861
          },
          negotiated_cost: null
        },
        {
          id: 7272687,
          code: {
            id: 33
          },
          negotiated_cost: null
        },
        {
          id: 7272688,
          code: {
            id: 36
          },
          negotiated_cost: null
        },
        {
          id: 7272689,
          code: {
            id: 767
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-15",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "2222222222",
    scheduled_pick_up_timestamp: "2023-03-15 10:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-15 10:15:00",
    scheduled_drop_off_timestamp: "2023-03-15 11:54:43",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-15 09:00:08",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 1,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 67.12,
      pick_up_arrival_cost: 20,
      bonus: 0,
      initial_cost: 67.12,
      cost: 67.12,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 40.5,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596863,
    trip_id: "STY-1005299-A",
    external_trip_id: null,
    request: {
      id: 1005299,
      external_trip_request_id: null,
      client: {
        id: 108426,
        client_id: "ZZ69922T",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "AIDA",
        middle_name: null,
        last_name: "ACEVEDO",
        gender: {
          id: 2
        },
        birth_date: "1933-08-17",
        location: {
          id: 492499
        },
        phone: "7182669104",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 4,
          name: "Spanish",
          iso_639_2b_code: "spa"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 109639,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2017-07-01",
            expiration_date: null,
            service_level: null,
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 401,
            name: "Aetna Better Health",
            npi: "1841565156",
            payer_id: "40026",
            location: {
              street_address: "55 West 125th street",
              city: "new york",
              state: {
                id: "NY"
              },
              zip_code: "10027"
            },
            business_phone: "1122334455",
            business_fax: "8609028019",
            alternate_phone: "2222222222",
            alternate_fax: "8609028019",
            contact: {
              first_name: "Edgar",
              last_name: "Narvaez",
              phone: "3333333333"
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "837P",
              version: "00501",
              sender_id: "40026",
              sender_qualifier: "ZZ",
              receiver_id: "NYSOH-ENC",
              receiver_qualifier: "ZZ",
              icd_status: null,
              gs_qualifier: "HC",
              claim_file_name: "TR.NYE40026.837PM.W.{generationDateTime}.001.DAT",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: null
        },
        secondary_insurance: null,
        notification: null,
        is_active: 1,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2022-06-06 11:07:52"
      },
      is_standing_order: 0,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960696,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 4,
        name: "Dialysis"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: null,
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 492499,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "2940 WEST 33RD ST 8A",
          building: null,
          apartment: null,
          city: "BROOKLYN",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11224",
          zip_extension: null,
          formatted_address: "2940 W 33rd St #8A, Brooklyn, NY 11224, USA",
          coordinates: {
            lat: 40.57403,
            lng: -73.99989
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "7182669104",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 13,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Kings County Hospital",
          street_address: "451 Clarkson Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11203",
          zip_extension: "2026",
          formatted_address: "451 Clarkson Ave, Brooklyn, NY 11203, USA",
          coordinates: {
            lat: 40.65672,
            lng: -73.94617
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 11.6,
      is_toll_included: 0,
      route_id: 8508193,
      procedures: [
        {
          id: 7272694,
          code: {
            id: 322
          },
          negotiated_cost: null
        },
        {
          id: 7272695,
          code: {
            id: 358
          },
          negotiated_cost: null
        },
        {
          id: 7272696,
          code: {
            id: 335
          },
          negotiated_cost: null
        },
        {
          id: 7272697,
          code: {
            id: 340
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-15",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "7182669104",
    scheduled_pick_up_timestamp: "2023-03-15 11:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-15 11:15:00",
    scheduled_drop_off_timestamp: "2023-03-15 12:26:13",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-15 10:00:08",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 1,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 35.2,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 35.2,
      cost: 35.2,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 47.84,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596865,
    trip_id: "STY-1005301-A",
    external_trip_id: null,
    request: {
      id: 1005301,
      external_trip_request_id: null,
      client: {
        id: 345,
        client_id: "0000345TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Bambie",
        middle_name: null,
        last_name: "ButterworthTST",
        gender: {
          id: 2
        },
        birth_date: "1940-10-29",
        location: {
          id: 81836
        },
        phone: "8100121736",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 20,
          name: "Chinese",
          iso_639_2b_code: "chi"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 335,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-06-01",
            expiration_date: "2020-07-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "5FW4P50ED60"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2020-08-03 11:12:25"
      },
      is_standing_order: 0,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960698,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 29,
        name: "Chiropractor"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: null,
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 81836,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "38-24 149th Pl",
          building: null,
          apartment: "2nd FL",
          city: "Flushing",
          state: {
            id: "NY"
          },
          county: {
            id: 41
          },
          zip: "11354",
          zip_extension: "4704",
          formatted_address: "38-24 149th Pl, Flushing, NY 11354, USA",
          coordinates: {
            lat: 40.76383,
            lng: -73.81577
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "8100121736",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "06:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 1,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Brooklyn Hospital Center at Downtown",
          street_address: "121 Dekalb Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11201",
          zip_extension: "5429",
          formatted_address: "121 Dekalb Ave, Brooklyn, NY 11201, USA",
          coordinates: {
            lat: 40.69126,
            lng: -73.97777
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "07:48:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 13.12,
      is_toll_included: 0,
      route_id: 8508220,
      procedures: [
        {
          id: 7272714,
          code: {
            id: 857
          },
          negotiated_cost: null
        },
        {
          id: 7272715,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7272716,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7272717,
          code: {
            id: 32
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-15",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "8100121736",
    scheduled_pick_up_timestamp: "2023-03-15 06:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-15 06:53:10",
    scheduled_drop_off_timestamp: "2023-03-15 07:48:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-15 05:00:09",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 0,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 37.3,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 37.3,
      cost: 37.3,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 35.45,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596866,
    trip_id: "STY-1005302-A",
    external_trip_id: null,
    request: {
      id: 1005302,
      external_trip_request_id: null,
      client: {
        id: 5760,
        client_id: "0005760TST",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "Virgie",
        middle_name: null,
        last_name: "BainesTST",
        gender: {
          id: 1
        },
        birth_date: "1940-08-28",
        location: {
          id: 85876
        },
        phone: "5457226257",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 1,
          name: "English",
          iso_639_2b_code: "eng"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 3306,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2016-11-01",
            expiration_date: "2020-07-31",
            service_level: {
              id: 1
            },
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 400,
            name: "Centers Plan for Health Living",
            npi: "1326329954",
            payer_id: "CPHL",
            location: {
              street_address: "75 Vanderbilt Ave. Suite 600",
              city: "Staten Island",
              state: {
                id: "NY"
              },
              zip_code: "10304"
            },
            business_phone: null,
            business_fax: "7182157000",
            alternate_phone: null,
            alternate_fax: "7182157000",
            contact: {
              first_name: "Christian",
              last_name: "Vinueza",
              phone: null
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "",
              version: "00501",
              sender_id: "473682597",
              sender_qualifier: "ZZ",
              receiver_id: "CPHL",
              receiver_qualifier: "ZZ",
              icd_status: "",
              gs_qualifier: "HC",
              claim_file_name: "{claimBatchID}-{providerName}-{generationDate}-001.txt",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: "1EJ9VT8GD20"
        },
        secondary_insurance: null,
        notification: null,
        is_active: 0,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2020-08-03 11:12:25"
      },
      is_standing_order: 0,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960699,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 6,
        name: "Discharge"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: null,
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 85876,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "677 Ilyssa Way",
          building: null,
          apartment: null,
          city: "Staten Island",
          state: {
            id: "NY"
          },
          county: {
            id: 43
          },
          zip: "10312",
          zip_extension: "6674",
          formatted_address: "677 Ilyssa Way, Staten Island, NY 10312, USA",
          coordinates: {
            lat: 40.56299,
            lng: -74.18678
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "5457226257",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 13,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Kings County Hospital",
          street_address: "451 Clarkson Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11203",
          zip_extension: "2026",
          formatted_address: "451 Clarkson Ave, Brooklyn, NY 11203, USA",
          coordinates: {
            lat: 40.65672,
            lng: -73.94617
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: null,
        time_source: null,
        is_next_day: 0
      },
      mileage: 22.42,
      is_toll_included: 1,
      route_id: 8508226,
      procedures: [
        {
          id: 7272727,
          code: {
            id: 860
          },
          negotiated_cost: null
        },
        {
          id: 7272728,
          code: {
            id: 1974
          },
          negotiated_cost: null
        },
        {
          id: 7272729,
          code: {
            id: 30
          },
          negotiated_cost: null
        },
        {
          id: 7272730,
          code: {
            id: 32
          },
          negotiated_cost: null
        },
        {
          id: 7272731,
          code: {
            id: 1947
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-15",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "5457226257",
    scheduled_pick_up_timestamp: "2023-03-15 08:30:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-15 08:45:00",
    scheduled_drop_off_timestamp: "2023-03-15 10:34:46",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 1,
      name: "Bidding Enabled"
    },
    bidding_start_timestamp: "2023-03-15 08:14:35",
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 1,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 62.35,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 62.35,
      cost: 62.35,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 44.36,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  },
  {
    id: 3596864,
    trip_id: "STY-1005300-A",
    external_trip_id: null,
    request: {
      id: 1005300,
      external_trip_request_id: null,
      client: {
        id: 108426,
        client_id: "ZZ69922T",
        medicaid_id: null,
        medicare_id: null,
        client_medical_records: [],
        first_name: "AIDA",
        middle_name: null,
        last_name: "ACEVEDO",
        gender: {
          id: 2
        },
        birth_date: "1933-08-17",
        location: {
          id: 492499
        },
        phone: "7182669104",
        phone_ext: null,
        preferred_location: null,
        preferred_phone: null,
        preferred_phone_ext: null,
        cell_phone: null,
        primary_language: {
          id: 4,
          name: "Spanish",
          iso_639_2b_code: "spa"
        },
        diagnoses: [],
        transportation_condition: null,
        can_sign_driver_log: null,
        sty_assigned_service_level: null,
        transportation_preferences: null,
        is_low_vehicle_required: 0,
        is_high_focus: 0,
        client_preferred_transportation_provider: null,
        tri_city_disclaimer_timestamp: null,
        sty_assigned_transportation_provider: null,
        daycare_transportation_provider: null,
        daycare_a_leg_pick_up_time: null,
        daycare_b_leg_pick_up_time: null,
        objectionable_transportation_providers: [],
        benefit_plans: [
          {
            id: 109639,
            name: null,
            type: {
              id: 1
            },
            effective_date: "2017-07-01",
            expiration_date: null,
            service_level: null,
            transportation_start_date: null,
            transportation_end_date: null,
            approved_facility: null
          }
        ],
        primary_insurance: {
          provider: {
            id: 401,
            name: "Aetna Better Health",
            npi: "1841565156",
            payer_id: "40026",
            location: {
              street_address: "55 West 125th street",
              city: "new york",
              state: {
                id: "NY"
              },
              zip_code: "10027"
            },
            business_phone: "1122334455",
            business_fax: "8609028019",
            alternate_phone: "2222222222",
            alternate_fax: "8609028019",
            contact: {
              first_name: "Edgar",
              last_name: "Narvaez",
              phone: "3333333333"
            },
            edi: {
              capabilities: {
                eligibility: 1,
                remittance: 1,
                claim_status: 1
              },
              is_active: 1,
              is_production_mode: 1,
              is_supported: 1,
              service_place: {
                id: 99
              },
              supported_claim_types: "837P",
              version: "00501",
              sender_id: "40026",
              sender_qualifier: "ZZ",
              receiver_id: "NYSOH-ENC",
              receiver_qualifier: "ZZ",
              icd_status: null,
              gs_qualifier: "HC",
              claim_file_name: "TR.NYE40026.837PM.W.{generationDateTime}.001.DAT",
              claim_count_per_file: 5000
            },
            is_quick_reservation_allowed: 1
          },
          number: null
        },
        secondary_insurance: null,
        notification: null,
        is_active: 1,
        passenger_type_id: 0,
        is_billing_allowed: 1,
        is_fwa_monitoring: 0,
        fwa_description: null,
        covid_tracking: null,
        last_update_timestamp: "2022-06-06 11:07:52"
      },
      is_standing_order: 0,
      type: {
        id: 1,
        name: "Standard"
      },
      comments: "",
      status: {
        id: 4
      },
      leg_count: 1
    },
    leg: {
      id: 1960697,
      original_trip_leg: null,
      external_trip_id: null,
      order_number: 1,
      trip_reason: {
        id: 27,
        name: "Cardiac Rehabilitation"
      },
      trip_reason_description: null,
      service_level: {
        id: 1,
        code: "LIV",
        name: "Livery",
        is_for_secondary_provider: 0
      },
      vehicle_equipment_items: [],
      escort: {
        personal_care_attendant_count: 0,
        adult_count: 0,
        child_count: 0,
        child_seat_count: 0,
        animal_count: 0
      },
      required_vehicle_capacity: {
        wc_seat_count: 0
      },
      fare: null,
      facility_phone: null,
      facility_phone_ext: null,
      pick_up: {
        location: {
          id: 492499,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: null,
          street_address: "2940 WEST 33RD ST 8A",
          building: null,
          apartment: null,
          city: "BROOKLYN",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11224",
          zip_extension: null,
          formatted_address: "2940 W 33rd St #8A, Brooklyn, NY 11224, USA",
          coordinates: {
            lat: 40.57403,
            lng: -73.99989
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        phone: "7182669104",
        phone_ext: null,
        alternate_phone: null,
        alternate_phone_ext: null,
        time: "10:00:00",
        time_source: {
          id: 1,
          name: "Requested"
        },
        is_next_day: 0
      },
      drop_off: {
        location: {
          id: 13,
          location_source: {
            id: 0
          },
          time_zone: {
            id: 1,
            name: "America/New_York",
            generalized_name: "Eastern Time",
            description: "Eastern Time",
            is_generalized: 1
          },
          name: "Kings County Hospital",
          street_address: "451 Clarkson Avenue",
          building: null,
          apartment: null,
          city: "Brooklyn",
          state: {
            id: "NY"
          },
          county: {
            id: 24
          },
          zip: "11203",
          zip_extension: "2026",
          formatted_address: "451 Clarkson Ave, Brooklyn, NY 11203, USA",
          coordinates: {
            lat: 40.65672,
            lng: -73.94617
          }
        },
        comments_for_driver: null,
        doctor_name: null,
        time: "11:31:00",
        time_source: {
          id: 2
        },
        is_next_day: 0
      },
      mileage: 11.6,
      is_toll_included: 0,
      route_id: 8508193,
      procedures: [
        {
          id: 7272718,
          code: {
            id: 322
          },
          negotiated_cost: null
        },
        {
          id: 7272719,
          code: {
            id: 358
          },
          negotiated_cost: null
        },
        {
          id: 7272720,
          code: {
            id: 335
          },
          negotiated_cost: null
        },
        {
          id: 7272721,
          code: {
            id: 340
          },
          negotiated_cost: null
        }
      ]
    },
    date: "2023-03-16",
    sentry_notes: null,
    notes_from_provider: null,
    phone: "7182669104",
    scheduled_pick_up_timestamp: "2023-03-14 11:00:00",
    scheduled_pick_up_timestamp_source: {
      id: 1,
      name: "Requested"
    },
    latest_pick_up_timestamp: "2023-03-14 11:15:00",
    scheduled_drop_off_timestamp: "2023-03-16 11:31:00",
    scheduled_drop_off_timestamp_source: {
      id: 2,
      name: "Calculated"
    },
    pick_up_arrival_timestamp: null,
    pick_up_timestamp: null,
    pick_up_delay: null,
    drop_off_timestamp: null,
    bidding_status: {
      id: 0,
      name: "Not on Bidding"
    },
    bidding_start_timestamp: null,
    is_done_by_not_integrated_provider: 0,
    status: {
      id: 0,
      name: "New"
    },
    is_confirmed: 1,
    is_rescue: 0,
    cancel_reason: null,
    cancel_note: null,
    reroute_reason: null,
    reroute_note: null,
    status_last_change: null,
    attestation: {
      status: {
        id: 0
      },
      note: null
    },
    payment_authorization: {
      status: {
        id: 0
      },
      rejection_reason: null,
      note: null
    },
    payment: {
      delivery_cost: 35.2,
      pick_up_arrival_cost: 13,
      bonus: 0,
      initial_cost: 35.2,
      cost: 35.2,
      paid_amount: 0,
      withheld_amount: 0,
      cost_correction_note: null,
      cost_correction: 0,
      status: {
        id: 0
      }
    },
    billing_authorization: {
      status: {
        id: 1
      },
      rejection_reason: null,
      note: null
    },
    billing: {
      status: {
        id: 0
      },
      cost: 47.84,
      paid_amount: 0
    },
    transportation_provider: null,
    acceptance_by_transportation_provider_status: {
      id: 0,
      name: "Pending"
    },
    vehicle: null,
    vehicle_vin: null,
    vehicle_license_plate_number: null,
    driver: null,
    driver_license_number: null,
    is_covid_eligible_transport_required: 0,
    transportation_provider_covid_eligibility_status_name: "Not routed",
    mta: null,
    trip_competitive_assignment_status: {
      id: 0
    },
    competitive_transportation_providers: [],
    trip_marketplace_status: {
      id: 0
    },
    notes: []
  }
];
