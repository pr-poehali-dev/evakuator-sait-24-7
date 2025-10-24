import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const phoneNumber = "+7(951)500-05-66";
  const address = "Ростовская область, Чертковский район, село Алексеево-Лозовское, улица Дачная 14";

  const services = [
    {
      icon: "Truck",
      title: "Легковые автомобили",
      description: "Быстрая и безопасная эвакуация легковых машин любых марок"
    },
    {
      icon: "Bus",
      title: "Грузовые автомобили",
      description: "Эвакуация грузовых авто и коммерческого транспорта"
    },
    {
      icon: "Wrench",
      title: "Техническая помощь",
      description: "Помощь на дороге: замена колеса, запуск двигателя, подзарядка"
    },
    {
      icon: "Shield",
      title: "Аварийные ситуации",
      description: "Оперативный выезд к месту ДТП в любое время суток"
    }
  ];

  const advantages = [
    { icon: "Clock", text: "Работаем 24/7 без выходных" },
    { icon: "Gauge", text: "Прибытие в течение 30 минут" },
    { icon: "BadgeCheck", text: "Опытные водители с лицензией" },
    { icon: "Wallet", text: "Прозрачные цены без доплат" }
  ];

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-secondary text-secondary-foreground py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="TruckIcon" size={32} className="text-primary" />
            <h1 className="text-2xl md:text-3xl font-bold">ЭВАКУАТОР <span className="text-primary">24/7</span></h1>
          </div>
          <a href={`tel:${phoneNumber}`} className="text-primary font-bold text-lg md:text-xl hover:text-primary/80 transition-colors">
            {phoneNumber}
          </a>
        </div>
      </header>

      <section className="relative bg-secondary text-secondary-foreground py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/80 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Круглосуточная служба эвакуации
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-secondary-foreground/90">
                Профессиональная помощь на дорогах Ростовской области
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all hover:scale-105"
                  onClick={handleCall}
                >
                  <Icon name="Phone" size={24} className="mr-2" />
                  Вызвать эвакуатор
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in hidden md:block">
              <img 
                src="https://cdn.poehali.dev/projects/4acdceb3-2dc8-4fee-959f-a428b6f185c8/files/4adef5fa-a5c1-4987-a7b5-03e627840f2a.jpg" 
                alt="Эвакуатор" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <Icon name={advantage.icon} size={48} className="mx-auto mb-4 text-primary" />
                  <p className="font-semibold">{advantage.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">Полный спектр услуг эвакуации и технической помощи</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Нужна помощь прямо сейчас?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Позвоните нам — мы выедем к вам в течение 30 минут
            </p>
            <Button 
              size="lg" 
              className="text-2xl px-12 py-8 bg-primary hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              onClick={handleCall}
            >
              <Icon name="Phone" size={32} className="mr-3" />
              {phoneNumber}
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Phone" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Телефон</h3>
                    <a href={`tel:${phoneNumber}`} className="text-primary text-xl hover:underline">{phoneNumber}</a>
                    <p className="text-muted-foreground mt-1">Круглосуточно, без выходных</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="MapPin" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Адрес</h3>
                    <p className="text-foreground">{address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="TruckIcon" size={28} className="text-primary" />
            <p className="text-xl font-bold">ЭВАКУАТОР <span className="text-primary">24/7</span></p>
          </div>
          <p className="text-secondary-foreground/80">© 2024 Служба эвакуации. Работаем круглосуточно.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
