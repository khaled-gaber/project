import React from 'react'
import "./Content.css"
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Grid, Container, LinearProgress, Box, Chip } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, CartesianGrid, XAxis, YAxis, Bar, Line, LineChart, ScatterChart, ZAxis, Scatter } from "recharts";
import  { useState, useEffect } from "react";

const data = [
  { name: "المصرف", value: 1400000 },
  { name: "قيد الإجراء", value: 1400000 },
  { name: "المتخلف من العقد", value: 6300000 },
];
const inform = [
  { name: 'أعمال التنفيذ', المخطط: 40, الفعلي: 20 },
  { name: 'المشتريات والعقود', المخطط: 60, الفعلي:50 },
];
 const mark = [
  { name: 'Nov 24', المخطط: 76, الفعلي: 72 },
  { name: 'Dec 25', المخطط: 50, الفعلي: 8 },
  { name: 'Jan 25', المخطط: 30, الفعلي: 20 },
  { name: 'Feb 25', المخطط: 20, الفعلي: 30 },
  { name: 'Mar 25', المخطط: 60, الفعلي: 90 },
  { name: 'Apr 25', المخطط: 10, الفعلي: 5 },
  { name: 'May 25', المخطط: 3, الفعلي: 80 },
  { name: 'Jun 25', المخطط: 54, الفعلي: 84 },
  { name: 'Jul 25', المخطط: 21, الفعلي: 91 },
  { name: 'Aug 25', المخطط: 51, الفعلي: 91 },
  { name: 'Sep 25', المخطط: 18, الفعلي: 91 },
  { name: 'Oct 25', المخطط: 91, الفعلي: 91 },
];
// ألوان كل قسم
const dat = [
  { الاحتمالية: 4, التأثير: 3, الحجم: 150 }, // حجم الفقاعة
];

 const statuses = [
    { color: "#d9534f", label: "مرفوض" },
    { color: "#f0ad4e", label: "متأخر" },
    { color: "#5bc0de", label: "معتمد مع ملاحظات" },
    { color: "#0275d8", label: "إعاد التسليم" },
    { color: "#f7e463", label: "تحت الدراسة" },
    { color: "#5cb85c", label: "معتمد بدون ملاحظات" },
  ];
const COLORS = ["#f8b400", "#00c49f", "#d9d9d9"];




export default function Content() {
  const total = data.reduce((acc, cur) => acc + cur.value, 0);


  const [progress, setProgress] = useState(0); // 👈 قيمة البداية (0%)

  // 🧠 أنيميشن تدريجي
  useEffect(() => {
    const target = 20; // النسبة النهائية
    const speed = 20; // كل كام ملّي ثانية يزيد
    const increment = () => {
      setProgress((prev) => {
        if (prev >= target) return target;
        return prev + 1;
      });
    };
    const timer = setInterval(increment, speed);
    return () => clearInterval(timer);
  }, []);
    return (
    <div>



    <Container className='connn'   disableGutters maxWidth={false} sx={{ direction: "rtl",py: 0 }} >
<Grid container spacing={2}  className="conn">
        {/* كارت 1 */}
       <Grid className='card' item xs={12} sm={6} >
        <Typography
          variant="h6"
          align="center"
          sx={{ borderBottom: "1px solid #ffffffff", pb: 1, mb: 2 ,color:"#fff" }}
        >                نطاق عمل المشروع

        </Typography>
يهدف المشروع إلى: <br />
1- استعمال وسائل تقنية عالية المصداقية باستعمال الذكاء الاصطناعي وتدريب الآلة على التعرف على جميع الأمراض في جميع مراحل المرض وجميع أشكال.
<br />2- تسهيل تشخيص الأمراض وتسريع علاج المشاكل باستثمار أنظمة الذكاء الاصطناعي دون الحاجة إلى الرجوع إلى أخصائيين في الأمراض.
<br />3- توفير المحتوى العلمي لكافة البيانات والمعلومات الخاصة بالنباتات المستهدفة والنحل والأسماك والمواشي.
وذلك عن طريق: <br />
<br />1- إنشاء تطبيق لتعرف على أمراض المحاصيل المستهدفة بالذكاء الاصطناعي من خلال التصوير بكاميرا الجوال لخدمة المزارعين.
<br />2- إنشاء تطبيق لتعرف على الأمراض بالذكاء الاصطناعي من خلال التصوير بكاميرا الجوال لخدمة المزارعين.
<br />3- قاعدة معلومات لأمراض المحاصيل المستهدفة والنحل والأسماك وتوضيح طريقة الاستخدام للمزارعين.
            
         </Grid>

        {/* كارت 2 */}
        
        <Grid className='card1' item xs={12} sm={6}> 

            <div
      style={{
        background: "#2e7d32",
        padding: 20,
        borderRadius: 16,
        color: "#fff",
        width: "100%",
        maxWidth: 400,
        margin: "auto",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        height:580,
       
      }}
    >
      <h3 style={{ marginBottom: 70 }}>البيانات المالية</h3>

      <div style={{ position: "relative" }}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              isAnimationActive={true} // 🔥 الأنيميشن هنا
              animationDuration={1000} // المدة (بالمللي ثانية)
              animationBegin={0} // يبدأ فور التحميل
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="#1b1f2a"
                  strokeWidth={2}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value, name) => [`${(value / 1000000).toFixed(1)}M`, name]}
              contentStyle={{
                backgroundColor: "#2a2f3a",
                border: "none",
                color: "#fff",
                borderRadius: 8,
              }}
            />

            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              wrapperStyle={{ color: "#ccc", fontSize: "0.9rem" }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* النص في منتصف الدائرة */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "1.8rem",
            fontWeight: "bold",
          }}
        >
          {(total / 1000000).toFixed(1)}M
        </div>
      </div>
    </div>
              

          </Grid>  

        {/* كارت 3 */}
       <Grid className='car3' item xs={12} sm={6}>
      <CardContent>
        <Typography
          variant="h6"
          align="center"
          sx={{ borderBottom: "1px solid #ffffffff", pb: 1, mb: 2 ,color:"#fff" }}
        >
          بيانات المشروع
        </Typography>

        {/* ✅ الصفوف */}
        
        <div className='main'>
            <div className='cont'>
              
                <h1>قيمة المشروع : </h1>
                <p>9.16550000</p>
                 <h1>المرحلة </h1>
                <p>بدء المشروع</p>
                 <h1>الاستشاري </h1>
                <p> إيفارا للاستشارات الهندسية</p>
                 <h1>اسم المقاول</h1>
                <p> مؤسسة الحلول فائقة  الذكاء للاتصالات <br /> و تقنية المعلونات (قد تكون "المعلومات")</p>
              </div>
            
            <div>
              <div className='cont'>
                <h1>القطاع :</h1>
                <p>القيمة المضافة</p>
                <h1>مدة المشروع:</h1>
                <p> 36 شهر</p>
                <h1>حالة المشروع:</h1>
                <p>منتظم</p>
                 <h1>نوع المشروع:</h1>
                <p>تقنية المعلومات</p>
              </div>
            </div>
        </div>

        {/* ✅ التاريخ + المؤشر */}
        <Box sx={{ mt: 4 }}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography sx={{ color: "#ccc" }}>تاريخ بداية المشروع</Typography>
              <Typography sx={{ background: "#f6f6f8ff", px: 2, py: 0.5, borderRadius: 1 }}>
                2022/11/07
              </Typography>
            </Grid>

            <Grid item>
              <Typography sx={{ color: "#ccc" }}>تاريخ نهاية المشروع</Typography>
              <Typography sx={{ background: "#ffffffff", px: 1, py: 0.5, borderRadius: 1 }}>
                2025/11/07
              </Typography>
            </Grid>
          </Grid>

          {/* ✅ شريط المدة مع أنيميشن */}
          <Box sx={{ mt: 3  }}>
            <LinearProgress
           
              variant="determinate"
              value={progress}
              sx={{
                 height: 14,
                borderRadius: 2,
                backgroundColor: "#2c3340",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#00c49f",
                  transition: "width 0.155555s ease-in-out", // 👈 سلاسة الحركة
                  
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "#ccc",
                fontSize: "0.8rem",
                mt: 1,
              }}
            >
              <span>المدة المنقضية</span>
              <span>المدة المتبقية</span>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Grid>
     {/* كارت 4 */}
    <Grid className="card4" item xs={12} sm={6}>
    <Typography
          variant="h6"
          align="center"
          sx={{ borderBottom: "1px solid #ffffffff", pb: 1, mb: 2 ,color:"#fff" }}
        >
        مؤشر انجاز المشروع
        </Typography>
        <div className='card44'>
          <div className='tit'> نسبة الانجاز الفعلي : <br /> <span>90%</span> </div>
          <div>
           <table>
    <tr>
      <th>العنصر</th>
      <th>النسبة</th>
    </tr>
    <tr>
      <td>المخطط له</td>
      <td>
        <div class="value">
          91%
          
        </div>
      </td>
    </tr>
    <tr>
      <td>الحياد</td>
      <td>
        <div class="value">
          1%
          <span class="arrow">🔻</span>
        </div>
      </td>
    </tr>
  </table> 
          </div>
          <div>
              <Box sx={{ mt: 4 }}>
        

          {/* ✅ شريط المدة مع أنيميشن */}
          <Box sx={{ mt: 3 ,py:7 }}>
            <LinearProgress
           
              variant="determinate"
              value={progress}
              sx={{
                 height: 14,
                borderRadius: 2,
                backgroundColor: "#2c3340",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#00c49f",
                  transition: "width 0.155555s ease-in-out", // 👈 سلاسة الحركة
                  
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "#ccc",
                fontSize: "0.8rem",
                mt: 1,
              }}
            >
              <span>الانجاز الفعلي</span>
              <span>الحياد</span>
            </Box>
          </Box>
        </Box>
            
          </div>
        </div>
    </Grid>
    {/* كارت 5 */}
     <Grid className="card5" item xs={12} sm={6}>
        <Typography
          variant="h6"
          align="center"
          sx={{ borderBottom: "1px solid #ffffffff", pb: 1, mb: 2 ,color:"#fff",py :2 }}
        >
        ما تم انجازه
        </Typography>
        <div className='par'>
 <p>*تم الانتهاء من جميع الصور <br />
*تم الانتهاء من قاعده البيانات <br />
*تم بناء خطة العمل كاملة<br />
تم توثيق الكود والمهام المنفذة<br />
*تم إنشاء لوحة تحكم كاملة للمسؤول. </p> <br />
        </div>
      
       
      
       </Grid>
       {/* كارت 6 */}
       <Grid className="card6"item xs={12} sm={6}>
        <Typography
          variant="h6"
          align="center"
          sx={{ borderBottom: "1px solid #ffffffff", pb: 1, mb: 2 ,color:"#fff",py :2 }}
        >
            المخاطر 
         </Typography>
         <div>
          <table class="risk-table">
  <thead>
    <tr>
      <th>الرقم</th>
      <th>المخاطر</th>
      <th>الحل</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>تأخير تسليم المشروع</td>
      <td>تحديد جدول زمني واضح ومتابعة التقدم أسبوعيًا</td>
    </tr>
    <tr>
      <td>2</td>
      <td>قلة التواصل بين الفريق</td>
      <td>اجتماعات دورية وتوثيق القرارات في مكان مشترك</td>
    </tr>
    <tr>
      <td>3</td>
      <td>تغير متطلبات العميل المفاجئ</td>
      <td>كتابة عقد يوضح نطاق العمل بدقة</td>
    </tr>
  </tbody>
</table>

         </div>
        </Grid>
        <Grid className="card7" item xs={12} sm={6}>
        <Typography
          variant="h6"
          align="center"
          sx={{ borderBottom: "1px solid #ffffffff", pb: 1, mb: 2 ,color:"#fff",py :2 }}
        >
            مراحل المشروع
         </Typography>
          
    <Card>
      <CardContent className='info' >
        
        <ResponsiveContainer width="100%" height={350} >
          <BarChart data={inform} className='in'>
            <CartesianGrid strokeDasharray="3 3"  />
            <XAxis dataKey="name"  />
            <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
            <Bar dataKey="المخطط" fill="#f4b400"/>
            <Bar dataKey="الفعلي" fill="#00c49f" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
        </Grid>
          <Grid className="card7" item xs={12} sm={6}>
        <Typography
          variant="h6"
          align="center"
          sx={{ borderBottom: "1px solid #ffffffff", pb: 1, mb: 2 ,color:"#fff",py :2 }}
        >
            الاداء الحالي للمشروع
         </Typography>
          
   <Card>
      <CardContent  className='info'>
        <Typography variant="h6" gutterBottom align="center">
          الأداء الحالي للمشروع
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mark}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
            <Line type="monotone" dataKey="المخطط" stroke="#07e044" strokeWidth={2} />
            <Line type="monotone" dataKey="الفعلي" stroke="#f4b400" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
        </Grid>
           <Grid className='card8' item xs={12} sm={6}  >
        <Typography
          variant="h6"
          align="center"
          sx={{ borderBottom: "1px solid #ffffffff", pb: 1, mb: 2 ,color:"#fff" }}
        >                تقييم المخاطر
        </Typography>
         
            <div style={{ width: "100%", height: 300, backgroundColor: "#F1F8E9", borderRadius: "12px", padding: "10px" }}>
      
      <ResponsiveContainer className="info" width="100%" height="100%">
        <ScatterChart
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#aaa" />
          <XAxis
            type="number"
            dataKey="الاحتمالية"
            name="الاحتمالية"
            domain={[1, 5]}
            tick={{ fill: "#010101ff" }}
              label={{
              value: "الاحتمالية",
              position: "bottom",
              offset: 0,
              fill: "#111111ff",
              fontSize: 14,
            }}
          />
          <YAxis
            type="number"
            dataKey="التأثير"
            name="التأثير"
            domain={[1, 5]}
            tick={{ fill: "#0c0b0bff" }}
               label={{
              value: "التأثير",
              angle: -90,
              position: "insideLeft",
              fill: "#191818ff",
              fontSize: 14,
            }}
            
          />
          <ZAxis type="number" dataKey="الحجم" range={[100, 400]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter
            name="المخاطر"
            data={dat}
            fill="#ff8c42"
            fillOpacity={0.8}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
         </Grid>
            <Grid className='card8' item xs={12} sm={6} >
        <Typography
          variant="h6"
          align="center"
          sx={{ borderBottom: "1px solid #ffffffff", pb: 1, mb: 2 ,color:"#fff" }}
        >         ادارة الجودة

        </Typography>
         <div className="quality-card">
      <h3 className="quality-title">إدارة الجودة</h3>

      <div className="quality-stats">
        <div className="stat">
          <div className="stat-number">0</div>
          <div className="stat-label">اعتمادات فنية</div>
        </div>
        <div className="stat">
          <div className="stat-number">0</div>
          <div className="stat-label">استلامات أعمال</div>
        </div>
      </div>

      <div className="quality-divider"></div>

      <div className="quality-legend">
        {statuses.map((item, index) => (
          <div key={index} className="legend-item">
            <span
              className="legend-dot"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="legend-text">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
         </Grid>
           <Grid className='card8' item xs={12} sm={6} >
       
           <img  src="https://adwaalwatan.com/wp-content/uploads/2025/04/ajel_2025-04-27_izlpwa8b_مرشد-مرشد.png" alt="" />
            
         </Grid>

</Grid>
       
    </Container>

    </div>
  )
}

