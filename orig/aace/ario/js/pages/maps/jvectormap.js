$(function () {
  if ($("#world-map-markers").length > 0) {
    $("#world-map-markers").vectorMap({
      map: "world_mill_en",
      backgroundColor: "transparent",
      borderColor: "#fff",
      borderOpacity: 0.25,
      borderWidth: 0,
      color: "#e6e6e6",
      regionStyle: {
        initial: {
          fill: "#cccccc",
        },
      },

      markerStyle: {
        initial: {
          r: 5,
          fill: "#fff",
          "fill-opacity": 1,
          stroke: "#000",
          "stroke-width": 1,
          "stroke-opacity": 0.4,
        },
      },

      markers: [
        {
          latLng: [21.0, 78.0],
          name: "INDIA : 29",
        },
        {
          latLng: [-33.0, 151.0],
          name: "Australia : 280",
        },
        {
          latLng: [36.77, -119.41],
          name: "USA : 354",
        },
        {
          latLng: [55.37, -3.41],
          name: "UK   : 125",
        },
        {
          latLng: [25.2, 55.27],
          name: "UAE : 44",
        },
      ],

      series: {
        regions: [
          {
            values: {
              US: "#2CA8FF",
              SA: "#01b2c6",
              AU: "#18ce0f",
              IN: "#f96332",
              GB: "#FFB236",
            },
            attribute: "fill",
          },
        ],
      },
      hoverOpacity: null,
      normalizeFunction: "linear",
      zoomOnScroll: false,
      scaleColors: ["#000000", "#000000"],
      selectedColor: "#000000",
      selectedRegions: [],
      enableZoom: false,
      hoverColor: "#fff",
    });
  }

  $("#india").vectorMap({
    map: "in_mill",
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: "#f96332",
      },
    },
  });

  $("#usa").vectorMap({
    map: "us_aea_en",
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: "#2CA8FF",
      },
    },
  });

  $("#australia").vectorMap({
    map: "au_mill",
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: "#18ce0f",
      },
    },
  });

  $("#uk").vectorMap({
    map: "uk_mill_en",
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: "#00ced1",
      },
    },
  });
});
