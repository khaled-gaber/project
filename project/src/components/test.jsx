import React from 'react'
import "./Content.css"
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Grid, Container, LinearProgress, Box, Chip } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import  { useState, useEffect } from "react";

const data = [
  { name: "المصرف", value: 1400000 },
  { name: "قيد الإجراء", value: 1400000 },
  { name: "المتخلف من العقد", value: 6300000 },
];

// ألوان كل قسم
const COLORS = ["#f8b400", "#00c49f", "#d9d9d9"];




export default function Content() {
  const total = data.reduce((acc, cur) => acc + cur.value, 0);


  const [progress, setProgress] = useState(0); // 👈 قيمة البداية (0%)

  // 🧠 أنيميشن تدريجي
  useEffect(() => {
    const target = 97; // النسبة النهائية
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



    <Container className='connn' maxWidth={false} sx={{ direction: "rtl",py: 0  }} >
      <Grid container spacing={1}   >
        {/* كارت 1 */}
       <Grid className='card' item xs={12} sm={6} >
                نطاق عمل المشروع
يهدف المشروع إلى:
1- استعمال وسائل تقنية عالية المصداقية باستعمال الذكاء الاصطناعي وتدريب الآلة على التعرف على جميع الأمراض في جميع مراحل المرض وجميع أشكال.
2- تسهيل تشخيص الأمراض وتسريع علاج المشاكل باستثمار أنظمة الذكاء الاصطناعي دون الحاجة إلى الرجوع إلى أخصائيين في الأمراض.
3- توفير المحتوى العلمي لكافة البيانات والمعلومات الخاصة بالنباتات المستهدفة والنحل والأسماك والمواشي.
وذلك عن طريق:
1- إنشاء تطبيق لتعرف على أمراض المحاصيل المستهدفة بالذكاء الاصطناعي من خلال التصوير بكاميرا الجوال لخدمة المزارعين.
2- إنشاء تطبيق لتعرف على الأمراض بالذكاء الاصطناعي من خلال التصوير بكاميرا الجوال لخدمة المزارعين.
3- قاعدة معلومات لأمراض المحاصيل المستهدفة والنحل والأسماك وتوضيح طريقة الاستخدام للمزارعين.
            
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
      }}
    >
      <h3 style={{ marginBottom: 20 }}>البيانات المالية</h3>

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
       <Grid className='car3' >
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
      </Grid>
    </Container>

    </div>
  )
}