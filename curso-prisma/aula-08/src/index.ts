import prisma from "./database";

async () => {
  //1. Agrupamento de alunos por turma (quantos alunos tem cada turma?).
  console.log(
    await prisma.student.groupBy({
      by: ["class"],
      _count: { id: true },
      orderBy: { _count: { id: "desc" } },
    })
  );

  //2. Agrupamento de alunos por turma que ainda não tem trabalho (quantos alunos em cada turma ainda não se empregaram?)
  console.log(
    await prisma.student.groupBy({
      by: ["class"],
      _count: { id: true },
      where: { jobId: null },
      orderBy: { _count: { id: "desc" } },
    })
  );
};
