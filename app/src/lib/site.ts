export const brand = {
  name: "Aprendiz Consultores",
  suffix: "SU, Lda",
  nuit: "401698205",
  slogan: "Por uma educação inclusiva e desenvolvimento sustentável",
  email: "aprendizconsultores718@gmail.com",
  phones: [
    { label: "+258 84 625 1780", raw: "258846251780" },
    { label: "+258 86 089 7409", raw: "258860897409" },
  ],
  addresses: [
    "Bairro Eduardo Mondlane, Av. Marginal, Cidade de Pemba",
    "Rua de UDENAMO, 245, 2.º andar, Flat 6, Cidade de Maputo",
  ],
  social: [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/aprendiz-consultores" },
    { name: "Instagram", href: "https://www.instagram.com/aprendizconsultores" },
    { name: "Facebook", href: "https://www.facebook.com/aprendizconsultores" },
    { name: "YouTube", href: "https://www.youtube.com/@aprendizconsultores" },
  ],
};

export const waLink = (raw: string, text?: string) =>
  `https://wa.me/${raw}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const servicos = [
  {
    title: "Desenvolvimento Curricular",
    desc: "Concebemos e atualizamos currículos alinhados às necessidades reais do mercado e das comunidades.",
  },
  {
    title: "Formação de Formadores",
    desc: "Capacitamos formadores com metodologias inclusivas, práticas e orientadas para resultados.",
  },
  {
    title: "Programas de Capacitação Comunitária",
    desc: "Programas vocacionais que fortalecem a autonomia e a resiliência das comunidades.",
  },
  {
    title: "Avaliação e Monitoramento de Projetos",
    desc: "Acompanhamos projetos com indicadores claros para garantir impacto e melhoria contínua.",
  },
  {
    title: "Consultoria Estratégica",
    desc: "Apoiamos instituições na definição de estratégias educacionais de excelência.",
  },
  {
    title: "Gestão de Projetos",
    desc: "Planeamos, executamos e entregamos projetos educacionais com rigor e transparência.",
  },
];

export const cursos = [
  "HST (Higiene e Segurança no Trabalho)",
  "Confeitaria (Doces e Salgados)",
  "Decoração e Ornamentação de Eventos",
  "Logística e Procurement",
  "Operador de Caixa e Atendimento ao Cliente",
  "Hotelaria e Turismo",
  "Contabilidade Básica",
  "Electricidade Instaladora",
  "Soldadura Básica",
  "Inglês Comunicativo",
];

export const cursosEspeciais = [
  {
    title: "Informática Básica",
    note: "sem estágio",
    uniforme: "1 350 MT",
    certificado: "2 500 MT",
  },
  {
    title: "Design Gráfico",
    note: "sem estágio",
    uniforme: "1 350 MT",
    certificado: "2 500 MT",
  },
];

export const edicao = {
  numero: "2.ª Edição",
  inscricoes: "De 01 de Setembro a 02 de Outubro de 2026",
  inicioAulas: "4 de Outubro de 2026",
  dias: "Finais de semana (Sábado e Domingo)",
  duracao: "3 meses, 2 horas diárias",
  local: "Centro Cultural Tambu Tambulani, Bairro Eduardo Mondlane (Nanhimbi)",
  investimento: [
    { item: "Inscrição", valor: "Gratuita" },
    { item: "Mensalidade", valor: "Gratuita" },
    { item: "Certificado", valor: "1 000 MT" },
    { item: "Estágio Prático", valor: "650 MT" },
    { item: "Uniforme", valor: "850 MT", note: "excepto Informática e Design Gráfico" },
  ],
  requisitos: [
    "Documento de Identidade: BI, Cédula, Passaporte ou qualquer outro documento oficial com foto.",
    "Habilitações Literárias: Certificado da 7.ª, 10.ª, 12.ª classe ou equivalente.",
  ],
};
