module.exports = (invoice) => {
  const today = new Date();
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Invoice</title>
      <style>
        body,
        table {
          font-size: 13px;
        }
        .whole-box {
          border: 1px solid;
        }
        .company {
          
          padding: 5px;
        }
        .company-details {
          width: 50%;
          margin-left: 20%;
        }
        .company-name {
          font-size: 15px;
          font-weight: bolder;
          padding-bottom: 5px;
        }
        .company-city {
          padding-bottom: 8px;
        }
        .contact-details {
         width: 50%;
          margin-left: 10%;
        }
        .tax-invoice {
          border-top: 1px solid;
          border-bottom: 1px solid;
          padding-bottom: 5px;
          padding-top: 5px;
          text-align: center;
          font-size: 15px;
          font-weight: bolder;
        }
        .invoice {
          display: flex;
          border-bottom: 1px solid;
        }
        .customer {
          margin-right: 12%;
          display: flex;
          width: 44%;
        }
        .invoice-details {
          border-left: 1px solid;
          width: 56%;
        }
        .fnt-bldr {
          font-weight: bolder;
        }
        .pad-5 {
          padding: 5px;
        }
        .customer-details {
          padding-left: 5px;
        }
        .to {
          width: 30px;
        }
        table {
          border-bottom: 1px solid;
          width: 100%;
        }
        table th {
          text-align: left;
          padding-right: 15px;
          padding-left: 5px;
          width: 50%;
        }
        table thead th {
          border-right: 1px solid;
          width: auto;
          border-bottom: 1px solid;
        }
        .no-border {
          border: none;
        }
        .no-border-right {
          border-right: none !important;
        }
        .border-right {
          border-right: 1px solid;
        }
        .border-top {
          border-top: 1px solid;
        }
        .text-right {
          text-align: right;
        }
        .pad-inh {
          padding: inherit;
        }
        .item-tbody td {
          border-right: 1px solid;
          padding: 5px;
        }
        .remarks-row {
          display: flex;
        }
        .remarks {
          width: 51%;
          padding: 5px;
          border-right: 1px solid;
          border-bottom: 1px solid;
        }
        .total-details {
          width: 49%;
        }
        .total-details td,
        .total-details th {
          padding: 3px;
        }
        .signature-row {
          display: flex;
          height: 60px;
        }
        .subject,
        .sign {
          width: 50%;
        }
        .height-40 {
          height: 40px;
        }
        .trusted {
          text-align: center;
          text-decoration: underline;
        }
        .item-details td {
          height: 50px;
        }
      </style>
    </head>
    <body>
      <div class="whole-box">
        <div class="company">
          <div class="company-details">
            <div class="company-name">POWERMAG CONTROL SYSTEM (P) LTD.,</div>
            <div>S.S.NO:532, NEHRU NAGAR,MANIYAKARAMPALAYAM, GANAPATHY</div>
            <div class="company-city">COIMBATORE - 641006,TAMIL NADU</div>
            <div>GSTI No : 33AACCP2065M1ZE</div>
            <div>CIN No : U29199TZ1995PTC006282</div>
          </div>
          <div class="contact-details">
            <div>0422-2532013 , 2537990</div>
            <div>+91 92444-07258</div>
            <div>info@powermag.in</div>
            <div>powermag.india@gmail.com</div>
            <div>www.powermag.in</div>
          </div>
        </div>
        <div class="tax-invoice">
          TAX INVOICE
        </div>
        <div class="invoice">
          <div class="customer pad-5">
            <div class="to fnt-bldr">TO :</div>
            <div class="customer-details">
              <div class="fnt-bldr">M/s.M3 CONTROLS;</div>
              <div>1/90, MANI COMPLEX;AVINASHI ROAD;</div>
              <div>NEELAMBUR;</div>
              <div>COIMBATORE , TAMIL NADU</div>
              <div>PINCODE :641062</div>
            </div>
          </div>
          <div class="invoice-details">
            <table>
              <tr>
                <th>Invoice No</th>
                <td>: TS -0807</td>
              </tr>
              <tr>
                <th>Date</th>
                <td>: 21/11/2018</td>
              </tr>
            </table>
  
            <table>
              <tr>
                <th>Ref No</th>
                <td>: NIL</td>
              </tr>
              <tr>
                <th>Date</th>
                <td>: 21/11/2018</td>
              </tr>
            </table>
  
            <table class="no-border">
              <tr>
                <th>Documents Thro.</th>
                <td>: BY YOUR VECHICLE</td>
              </tr>
              <tr>
                <th>Despatch Thro.</th>
                <td>: DIRECT</td>
              </tr>
              <tr>
                <th>LR No.</th>
                <td>:</td>
              </tr>
              <tr>
                <th>LR. Date</th>
                <td>:</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="item-details">
          <table cellspacing="0" cellpadding="0">
            <thead>
              <th>SL.No</th>
              <th>HSN Code</th>
              <th>Description</th>
              <th>Tax %</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th class="no-border-right">Value ()</th>
            </thead>
            <tbody class="item-tbody">
              <tr>
                <td width="5%">1</td>
                <td width="15%">85044090</td>
                <td width="30%">
                  YASKAWA MAKE VFD MODEL:CIMR-AD4A0103AMA SL.NO.1D1897842690022
                </td>
                <td width="10%">18.00</td>
                <td width="10%">1 NOS</td>
                <td width="15%">87900.00</td>
                <td width="15%" class="no-border-right">87900.00</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="no-border-right"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="remarks-row">
          <div class="remarks">
            <div class="fnt-bldr">Remarks :</div>
            <div>E-WAY BILL NO.5710 6835 8388</div>
            <div>DT.21.11.2018</div>
            <div>ATTACHED</div>
          </div>
          <div class="total-details">
            <table cellspacing="0" cellpadding="0">
              <tr>
                <td class="border-right">BASIC VALUE</td>
                <td class="text-right">118970.00</td>
              </tr>
              <tr>
                <td class="border-right">SGST @ 9% on Rs.118970.00</td>
                <td class="text-right">10707.30</td>
              </tr>
              <tr>
                <td class="border-right">CGST @ 9% on Rs.118970.00</td>
                <td class="text-right">10707.30</td>
              </tr>
              <tr>
                <td class="border-right">ROUNDED OFF</td>
                <td class="text-right">0.40</td>
              </tr>
              <tr>
                <th class="pad-inh border-top">TOTAL ()</th>
                <th class="text-right pad-inh border-top">140385.00</th>
              </tr>
            </table>
          </div>
        </div>
        <div class="rupees pad-5">
          Rupees One Lakh Forty Thousand Three Hundred and Eighty Five Only
        </div>
        <div class="signature-row border-top">
          <div class="subject border-right pad-5">
            <div class="height-40"></div>
            <div>Subject to COIMBATORE Juristication Only.</div>
          </div>
          <div class="sign pad-5 text-right">
            <div class="for fnt-bldr height-40">
              For POWERMAG CONTROL SYSTEMS (P) LTD.,
            </div>
            <div class="">Authorised Signatory</div>
          </div>
        </div>
      </div>
  
      <div class="trusted fnt-bldr">
        TRUSTED SERVICE SINCE 1995
      </div>
    </body>
  </html>
  
    `;
};
