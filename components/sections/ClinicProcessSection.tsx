"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquare, Search, Truck, Wrench, HeadphonesIcon } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Консультация",
    desc: "Выясняем задачи клиники, бюджет и требования. Подбираем оптимальное решение под ваши нужды.",
    detail: "Бесплатно · До 2 дней",
  },
  {
    num: "02",
    icon: Search,
    title: "Подбор оборудования",
    desc: "Формируем спецификацию с учётом профиля клиники. Предоставляем несколько вариантов с ценами.",
    detail: "Технический аудит · КП за 24 ч",
  },
  {
    num: "03",
    icon: Truck,
    title: "Поставка",
    desc: "Доставляем оборудование по всему Казахстану. Контролируем каждый этап логистики.",
    detail: "По всему Казахстану · Страхование груза",
  },
  {
    num: "04",
    icon: Wrench,
    title: "Монтаж и ввод в эксплуатацию",
    desc: "Наши инженеры устанавливают и настраивают оборудование, обучают персонал клиники.",
    detail: "Сертифицированные инженеры · Обучение",
  },
  {
    num: "05",
    icon: HeadphonesIcon,
    title: "Сервисная поддержка",
    desc: "Гарантийное и постгарантийное обслуживание. Оперативный выезд специалиста при поломке.",
    detail: "24/7 поддержка · Запчасти в наличии",
  },
];

export default function ClinicProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepsRef.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(i);
        },
        { threshold: 0.6 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "var(--blue)", color: "white", padding: "0" }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }} className="px-5 md:px-14">
        {/* Header */}
        <div style={{ paddingTop: 80, paddingBottom: 56 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "var(--accent)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Как мы работаем
          </div>
          <h2
            style={{
              fontFamily: "var(--font-cactus), 'Cactus Classical Serif', serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 560,
            }}
          >
            Полный цикл оснащения вашей клиники
          </h2>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, alignItems: "start" }} className="process-grid">
          {/* Left — step list */}
          <div style={{ paddingBottom: 80 }}>
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep === i;
              return (
                <div
                  key={step.num}
                  ref={(el) => { stepsRef.current[i] = el; }}
                  onClick={() => setActiveStep(i)}
                  style={{
                    display: "flex",
                    gap: 24,
                    padding: "28px 0",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                    transition: "opacity 0.3s",
                    opacity: isActive ? 1 : 0.45,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      background: isActive ? "var(--accent)" : "rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "background 0.3s",
                    }}
                  >
                    <Icon size={20} color="white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: "var(--accent)",
                        letterSpacing: "0.12em",
                        marginBottom: 4,
                      }}
                    >
                      ШАГ {step.num}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>
                      {step.title}
                    </div>
                    {isActive && (
                      <div
                        style={{
                          fontSize: 13,
                          color: "rgba(255,255,255,0.65)",
                          lineHeight: 1.65,
                          marginTop: 8,
                        }}
                      >
                        {step.desc}
                        <div
                          style={{
                            marginTop: 12,
                            fontSize: 11,
                            color: "var(--accent)",
                            fontWeight: 600,
                          }}
                        >
                          {step.detail}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — big number + visual */}
          <div
            style={{
              position: "sticky",
              top: 80,
              height: "calc(100vh - 160px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 64,
            }}
            className="process-visual"
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-cactus), 'Cactus Classical Serif', serif",
                  fontSize: "clamp(120px, 18vw, 220px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.06)",
                  userSelect: "none",
                  transition: "all 0.4s",
                }}
              >
                {STEPS[activeStep].num}
              </div>
              <div
                style={{
                  marginTop: -40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                }}
              >
                {(() => {
                  const Icon = STEPS[activeStep].icon;
                  return (
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        background: "var(--accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s",
                      }}
                    >
                      <Icon size={32} color="white" strokeWidth={1.5} />
                    </div>
                  );
                })()}
              </div>
              <div
                style={{
                  marginTop: 24,
                  fontSize: "clamp(18px, 2vw, 26px)",
                  fontWeight: 700,
                  transition: "all 0.3s",
                }}
              >
                {STEPS[activeStep].title}
              </div>
              {/* Progress dots */}
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  justifyContent: "center",
                  marginTop: 32,
                }}
              >
                {STEPS.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveStep(i)}
                    style={{
                      width: activeStep === i ? 24 : 8,
                      height: 8,
                      background: activeStep === i ? "var(--accent)" : "rgba(255,255,255,0.2)",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
