import { LessonExplanatory } from "@/components/LessonModels/LessonExplanatory";
import { LessonHeader } from "@/components/LessonModels/lessonHeader";
import { Box, Image, Text } from "@/components/UI";

import { LessonQuiz, Recomendation } from "@/components/LessonModels";
import { useScreens } from "@/hooks/useScreens";

export default function sen_cos() {
  const screens = [
    LessonExplanatory({
      children: (
        <>
          <Text
            fontSize={25}
            fontWeight="900"
            marginVertical="lg"
            textAlign="center"
          >
            Senos e Cossenos
          </Text>
          <Text fontSize={18} fontWeight="900" textAlign="center">
            Observe o circulo trigonométrico:
          </Text>
          <Image
            source={require("@/assets/images/lessons/aula11/circuferencia_seno_cos_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
            marginVertical="lg"
          />
          <Text fontSize={18} fontWeight="900" mb="sm" textAlign="center">
            Na figura temos um arco de medida α, que tem sua extremidade no
            ponto P, e por ser um ponto no plano cartesiano ele terá coordenadas
            representados por (m,n).
          </Text>
          <Text fontSize={18} fontWeight="900" mb="sm" textAlign="center">
            E como definição, m que é representado no eixo X, será o valor do
            Cosseno Cos α, e n que é representado no eixo Y, será o valor do
            Seno Sen α.
          </Text>
          <Text
            fontSize={25}
            fontWeight="900"
            marginVertical="lg"
            textAlign="center"
          >
            Sinais Senos e Cossenos
          </Text>
          <Image
            source={require("@/assets/images/lessons/aula11/circuferencia_seno_cos_ex2.png")}
            maxHeight={300}
            resizeMode="contain"
          />
          <Text fontSize={18} fontWeight="900" textAlign="center">
            No 1° quadrante
          </Text>
          <Text
            fontSize={18}
            fontWeight="900"
            textAlign="center"
            color="blueSection"
          >
            SenX ={" "}
            <Text fontSize={22} color="redSection">
              +
            </Text>{" "}
            e CosX ={" "}
            <Text fontSize={22} color="redSection">
              +
            </Text>{" "}
          </Text>
          <Image
            source={require("@/assets/images/lessons/aula11/circuferencia_seno_cos_ex3.png")}
            maxHeight={300}
            resizeMode="contain"
            mt="xl"
          />
          <Text fontSize={18} fontWeight="900" textAlign="center">
            No 2° quadrante
          </Text>
          <Text
            fontSize={18}
            fontWeight="900"
            textAlign="center"
            color="blueSection"
          >
            SenX ={" "}
            <Text fontSize={22} color="redSection">
              +
            </Text>{" "}
            e CosX ={" "}
            <Text fontSize={22} color="redSection">
              -
            </Text>{" "}
          </Text>
          <Image
            source={require("@/assets/images/lessons/aula11/circuferencia_seno_cos_ex4.png")}
            maxHeight={300}
            resizeMode="contain"
            mt="xl"
          />
          <Text fontSize={18} fontWeight="900" textAlign="center">
            No 3° quadrante
          </Text>

          <Text
            fontSize={18}
            fontWeight="900"
            textAlign="center"
            color="blueSection"
          >
            SenX ={" "}
            <Text fontSize={22} color="redSection">
              -
            </Text>{" "}
            e CosX ={" "}
            <Text fontSize={22} color="redSection">
              -
            </Text>{" "}
          </Text>
          <Image
            source={require("@/assets/images/lessons/aula11/circuferencia_seno_cos_ex5.png")}
            maxHeight={300}
            resizeMode="contain"
            mt="xl"
          />

          <Text fontSize={18} fontWeight="900" textAlign="center">
            No 4° quadrante
          </Text>
          <Text
            fontSize={18}
            fontWeight="900"
            textAlign="center"
            color="blueSection"
          >
            SenX ={" "}
            <Text fontSize={22} color="redSection">
              -
            </Text>{" "}
            e CosX ={" "}
            <Text fontSize={22} color="redSection">
              +
            </Text>{" "}
          </Text>
        </>
      ),
    }),
    LessonExplanatory({
      children: (
        <>
          <Text
            fontSize={25}
            fontWeight="900"
            marginVertical="lg"
            textAlign="center"
          >
            Simétricos
          </Text>
          <Text fontSize={18} fontWeight="900" textAlign="center">
            Observe o circulo trigonométrico:
          </Text>
          <Image
            source={require("@/assets/images/lessons/aula11/circuferencia_simetricos_ex1.png")}
            maxHeight={300}
            resizeMode="contain"
            marginVertical="lg"
          />
          <Text fontSize={18} fontWeight="900" mb="sm" textAlign="center">
            Dado um arco x teremos uma simetria em relação ao eixo Y,
            representado pelo ponto w, em relação a ORIGEM, representado por y e
            em relação ao eixo X, representado por z.
          </Text>

          <Image
            source={require("@/assets/images/lessons/aula11/circuferencia_simetricos_ex2.png")}
            maxHeight={300}
            resizeMode="contain"
          />
          <Text
            fontSize={18}
            fontWeight="900"
            textAlign="center"
            marginBottom="lg"
          >
            Para se descobrir o valor dos ângulos simétricos, toma-se que o
            valor de metade da circuferencia é π ( π = 180°), deduzimos e
            substituimos os valores de w, y e z, sendo agora; x - π, x + π e 2π
            - x, respectivamente.
          </Text>

          <Text
            fontSize={25}
            fontWeight="900"
            marginVertical="sm"
            textAlign="center"
            color="redSection"
          >
            Observação:
          </Text>

          <Text
            fontSize={18}
            fontWeight="900"
            textAlign="center"
            color="redSection"
          >
            Os valor do Seno, Cosseno e Tangente desses ângulos serão iguais,
            por justamente serem simétricos, respeitando, como aprendemos
            anteriormente, o quandrante que se encontram.
          </Text>
        </>
      ),
    }),
    Recomendation(),
    LessonQuiz({
      title:
        "1. Os sinais do Seno e Cosseno, do ponto K, seram respectivamente:",
      image: require("@/assets/images/lessons/aula11/circuferencia_seno_cos_exercicio1.png"),
      answer: "+ e -",
      questionOptions: ["- e -", "+ e -", "+ e +"],
    }),
    LessonQuiz({
      title:
        "2. Calcule e assinale a artenativa que contém o valor dos ângulos simétricos de 30° :",
      image: require("@/assets/images/lessons/aula11/circuferencia_simetrico_exercicio2.png"),
      answer: "150°, 210° e 330°",
      questionOptions: [
        "150°, 240° e 330°",
        "150°, 210° e 300°",
        "150°, 210° e 330°",
      ],
    }),
  ];

  const { progress, activeScreen } = useScreens(screens);

  return (
    <Box flex={1} alignItems="center" pt="xxl">
      <LessonHeader progress={progress} />
      {screens[activeScreen]}
    </Box>
  );
}
