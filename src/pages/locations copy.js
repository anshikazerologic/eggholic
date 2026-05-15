const locations = [
  {
    name: "Eggholic Hyde Park (Virtual)",
    address: "1400 E 47th Street, Unit-E, Chicago, IL",
    phone: "+1 872-731-2101",
    dir: "",
    orderLink: "https://order.toasttab.com/online/eggholic-47th-street-hyde-park",
    mapSrc: "https://www.google.com/maps?q=41.810371724958145,-87.59212701349358&z=15&output=embed",
    country: "US"
  },
  {
    name: "Pineville, NC",
    address: "605 N Polk St, Suite G, Pineville, NC 28134",
    phone: "(704) 835-1043",
    orderLink: "https://order.toasttab.com/online/eggholic-pineville",
    dir: "https://www.google.com/maps/search/Eggholic+605+N+Polk+St+Suite+G+Pineville+NC",
    mapSrc: "https://www.google.com/maps?q=35.09305699375365,-80.88516563025118&z=15&output=embed",
    country: "US"
  },
   {
    name: "Chicago,IL",
    address: "833 W Chicago Ave, Chicago, IL 60642",
    phone: "(312) 940-3521",
    orderLink: "https://order.eggholic.com/order/eggholic-chicago-il-chicago-il?diningOption=takeout",
    dir: "https://maps.app.goo.gl/iiu7udoyWRMKpE3v5",
    mapSrc: "https://www.google.com/maps?q=41.89611151395067, -87.6491925069907&z=15&output=embed",
    country: "US"
  },

   {
    name: "Burlington",
    address: "10 Wall Street, Burlington, MA 01803",
    phone: "(781) 359-4024",
    orderLink: "https://order.eggholic.com/order/eggholic-burlington-new-10-wall-street?diningOption=takeout",
    dir: "https://maps.app.goo.gl/42ecAVUAXhYfuYRw8",
    mapSrc: "https://www.google.com/maps?q=42.48526633001027, -71.18817307537392&z=15&output=embed",
    country: "US"
  },
  {
    name: "San Diego, CA",
    address: "9474 Black Mountain Rd H, San Diego, CA 92126",
    phone: "(858) 329-1007",
    dir: "https://maps.app.goo.gl/oSWgjQ59o4ZWeqoN6",
    orderLink: "https://order.toasttab.com/online/eggholic-san-diego",
    mapSrc: "https://www.google.com/maps?q=32.89528148949633,-117.12412674381511&z=15&output=embed",
    country: "US"
  },
  {
    name: "Pinner, UK",
    address: "381 Uxbridge Road, Pinner HA5 4JN, United Kingdom",
    phone: "+44 2037-930179",
    dir: "https://maps.app.goo.gl/vRBwPgNQZdEUMLPN7",
    orderLink: "https://order.toasttab.com/online/eggholic-hatchend",
    mapSrc: "https://www.google.com/maps?q=51.608015710591395,-0.37267105269031975&z=15&output=embed",
    country: "UK"
  },
  {
    name: "Cincinnati, OH",
    address: "9774 Cincinnati Columbus Road, Cincinnati, OH 45241",
    phone: "513-779-3447",
    dir: "https://www.google.com/maps/search/Eggholic+9774+Cincinnati+Columbus+Rd+Cincinnati+OH",
    orderLink: "https://order.toasttab.com/online/eggholic-cincinnati",
    mapSrc: "https://www.google.com/maps?q=39.30789181614283,-84.38356107428075&z=15&output=embed",
    country: "US"
  },
  {
    name: "Newark, CA",
    address: "5862 Mowry School Rd, Newark, CA 94560",
    dir: "https://www.google.com/maps/search/Eggholic+5862+Mowry+School+Rd+Newark+CA",
    phone: "(510) 573-2001",
    orderLink: "https://order.toasttab.com/online/eggholic-newark-sfo",
    mapSrc: "https://www.google.com/maps?q=37.5197088,-121.9928744&z=15&output=embed",
    country: "US"
  },
  {
    name: "Saskatoon, SK",
    address: "1036 Louise Ave, Saskatoon SK S7H 2P6",
    phone: "306-974-3446",
    dir: "https://maps.app.goo.gl/6drjA6RGhrcR3Son8",
    orderLink: "https://order.toasttab.com/online/eggholic-saskatoon-1036-louise-avenue",
    mapSrc: "https://www.google.com/maps?q=52.115566767172425,-106.63123685821897&z=15&output=embed",
    country: "Canada"
  },
  {
    name: "London, ON",
    address: "931 Oxford Street East - Unit 2 London ON, N5Y3K1",
    phone: "548-866-0349",
    dir: "https://maps.app.goo.gl/N63HD7F4uw38kJ8M8",
    orderLink: "https://order.toasttab.com/online/eggholic-london-unit-2-931-oxford-street-east",
    mapSrc: "https://www.google.com/maps?q=43.00327396954453,-81.22552734110438&z=15&output=embed",
    country: "Canada"
  },
  {
    name: "Washington, DC",
    address: "1990 M St NW, Washington, DC 20036",
    phone: "202-891-7863",
    dir: "https://www.google.com/maps/search/Eggholic+Washington+DC",
    orderLink: "https://order.toasttab.com/online/eggholic-dc",
    mapSrc: "https://www.google.com/maps?q=38.905446782482024,-77.04457473729107&z=15&output=embed",
    country: "US"
  },
  {
    name: "Jersey City, NJ",
    address: "769 Newark Avenue, Jersey City, NJ 07306",
    phone: "201-721-5025",
    dir: "https://www.google.com/maps/search/Eggholic+Jersey+City+NJ",
    orderLink: "https://order.toasttab.com/online/eggholic-jersey-city-new-tbd",
    mapSrc: "https://www.google.com/maps?q=40.7353914927037,-74.06368451635997&z=15&output=embed",
    country: "US"
  },
  {
    name: "Etobicoke, ON",
    address: "2687 Kipling Avenue #16, Etobicoke, ON M9V 5G6",
    phone: "416-741-4254",
    dir: "https://www.google.com/maps/search/Eggholic+Etobicoke+Ontario",
    orderLink: "https://order.toasttab.com/online/eggholic-etobicoke-2687-kipling-avenue",
    mapSrc: "https://www.google.com/maps?q=43.75066457126287,-79.58402107946887&z=15&output=embed",
    country: "Canada"
  },
  {
    name: "Calgary, AB",
    address: "4150 109 Ave NE, Calgary, AB T3N 1A6, Canada",
    phone: "(587) 625-0334",
    dir: "https://www.google.com/maps/search/Eggholic+Calgary+Alberta",
    orderLink: "https://order.toasttab.com/online/eggholic-calgary-4150-109-avenue-northeast",
    mapSrc: "https://www.google.com/maps?q=51.15387581380418,-113.97435032942666&z=15&output=embed",
    country: "Canada"
  },
  {
    name: "Shrewsbury, MA",
    address: "378 Maple Avenue, Shrewsbury, MA 01545",
    dir: "https://www.google.com/maps/search/Eggholic+Shrewsbury+MA",
    phone: "774-275-3165",
    orderLink: "https://order.toasttab.com/online/eggholic-shrewsbury-new-378-maple-avenue",
    mapSrc: "https://www.google.com/maps?q=42.27728923624665,-71.73752817397386&z=15&output=embed",
    country: "US"
  },
  {
    name: "Indianapolis, IN",
    address: "1224 W 86th Street, Indianapolis, IN 46260",
    dir: "https://www.google.com/maps/search/Eggholic+1224+W+86th+Street+Indianapolis+IN",
    phone: "+1 (317) 343-2995",
    orderLink: "https://order.toasttab.com/online/eggholic-indianapolis-new-1224-west-86th-street",
    mapSrc: "https://www.google.com/maps?q=39.913339967842035,-86.1814737028971&z=15&output=embed",
    country: "US"
  },
  {
    name: "Scarborough, ON",
    address: "3478 Lawrence Ave E, Scarborough, ON M1H 1A9",
    dir: "https://www.google.com/maps/search/Eggholic+Scarborough+Ontario",
    phone: "(416) 431-1999",
    orderLink: "https://order.toasttab.com/online/eggholic-scarborough-3478-lawrence-ave-e",
    mapSrc: "https://www.google.com/maps?q=43.76009365230575,-79.22762870460318&z=15&output=embed",
    country: "Canada"
  },
  {
    name: "Sugar Land, TX",
    address: "232 Highway 6, Suite 100, Sugar Land, TX 77478",
    phone: "(281) 637-0032",
    dir: "https://www.google.com/maps/search/Eggholic+Sugar+Land+TX",
    orderLink: "https://order.toasttab.com/online/eggholic-sugarland-new-232-highway-6",
    mapSrc: "https://www.google.com/maps?q=29.611368448756195,-95.64860441486162&z=15&output=embed",
    country: "US"
  },
  {
    name: "Waterloo, ON",
    address: "31 University Ave E, Waterloo, ON N2J 2V9",
    dir: "https://www.google.com/maps/search/Eggholic+Waterloo+Ontario",
    phone: "(519) 747-5295",
    orderLink: "https://order.toasttab.com/online/eggholic-waterloo-31-university-avenue-east-vroqm",
    mapSrc: "https://www.google.com/maps?q=43.47680837398487,-80.52305968875245&z=15&output=embed",
    country: "Canada"
  },
  {
    name: "Edison, NJ",
    address: "1679 Oaktree Rd, Edison, NJ 08820",
    dir: "https://maps.app.goo.gl/v34n92D4JoGuVXMZ7",
    phone: "(848) 448-7799",
    orderLink: "https://order.toasttab.com/online/eggholic-edison-nj-1679-oak-tree-road-unit-a",
    mapSrc: "https://www.google.com/maps?q=40.57204450096187,-74.3433659028732&z=15&output=embed",
    country: "US"
  },
  {
    name: "Nashville, TN",
    address: "412 Harding place Suite 106, Nashville, TN 37211",
    phone: "(615) 739-6227",
    dir: "https://maps.app.goo.gl/mBBjtnMgd1qxngVR8",
    orderLink: "https://order.toasttab.com/online/eggholic-nashville-tn",
    mapSrc: "https://www.google.com/maps?q=36.07975285131778,-86.72847817049148&z=15&output=embed",
    country: "US"
  },
  {
    name: "Brampton, ON",
    address: "168 Kennedy Road South Unit 1, Brampton, ON L6W 3G6",
    phone: "(905) 874-3040",
    dir: "https://www.google.com/maps/search/Eggholic+Brampton+Ontario",
    orderLink: "https://order.toasttab.com/online/eggholic-brampton-ont-new-168-kennedy-rd-s-suite-a",
    mapSrc: "https://www.google.com/maps?q=43.68151835572008,-79.72958525564871&z=15&output=embed",
    country: "Canada"
  },
  {
    name: "Queens, NY",
    address: "256-01 Hillside Ave, Queens, NY 11004",
    phone: "(718) 413-5432",
    dir: "https://www.google.com/maps/search/Eggholic+256-01+Hillside+Avenue+Queens+NY",
    orderLink: "https://order.toasttab.com/online/eggholic-queens-ny",
    mapSrc: "https://www.google.com/maps?q=40.7369158417526,-73.71184526794102&z=15&output=embed",
    country: "US"
  },
  {
    name: "Chantilly, VA",
    address: "13951 Metrotech Drive, Chantilly, VA 20151",
    phone: "(703) 253-1646",
    dir: "https://www.google.com/maps/search/Eggholic+13951+Metrotech+Drive+Chantilly+VA",
    orderLink: "https://order.toasttab.com/online/eggholic-chantilly-va",
    mapSrc: "https://www.google.com/maps?q=38.89495461171043,-77.42662382436674&z=15&output=embed",
    country: "US"
  },
  {
    name: "Niles, IL",
    address: "8425 W Golf Rd, Niles, IL 60714",
    phone: "(224) 534-7137",
    dir: "https://www.google.com/maps/search/Eggholic+Niles+IL",
    orderLink: "https://order.toasttab.com/online/eggholic-niles-il-niles-il",
    mapSrc: "https://www.google.com/maps?q=42.05434816302508,-87.83647120281825&z=15&output=embed",
    country: "US"
  },
  {
    name: "Irving, TX",
    address: "7750 N MacArthur Blvd, Suite #135, Irving, TX 75063",
    phone: "(972) 685-7999",
    dir: "https://www.google.com/maps/search/Eggholic+Irving+TX",
    orderLink: "https://order.toasttab.com/online/eggholic-irving-tx",
    mapSrc: "https://www.google.com/maps?q=32.912674328476875,-96.95661288963424&z=15&output=embed",
    country: "US"
  },
  {
    name: "Louisville, KY",
    address: "1947 S Hurstbourne Pkwy, Louisville, KY 40220",
    phone: "(502) 916-2024",
    dir: "https://www.google.com/maps/search/Eggholic+Louisville+KY",
    orderLink: "https://order.toasttab.com/online/eggholic-louisville-ky",
    mapSrc: "https://www.google.com/maps?q=38.2163319546591,-85.58503974713578&z=15&output=embed",
    country: "US"
  },

  {
    name: "Schaumburg, IL",
    address: "829 W Higgins Rd, Schaumburg, IL 60195",
    phone: "(847) 565-4105",
    dir: "https://www.google.com/maps/search/Eggholic+829+W+Higgins+Rd+Schaumburg+IL",
    orderLink: "https://order.toasttab.com/online/eggholic-schaumburg",
    mapSrc: "https://www.google.com/maps?q=42.049724142678805,-88.10145394699735&z=15&output=embed",
    country: "US"
  }
];

export default locations;