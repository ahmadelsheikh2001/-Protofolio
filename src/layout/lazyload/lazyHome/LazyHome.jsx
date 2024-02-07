import { Container, Row } from 'react-bootstrap';
import './LazyHome.css';

const LazyHome = () => {
  return (
    <>
      <section className='lazy_hero' style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Container>
          <Row>
          <div className="col-12 col-md-7 col-lg-6">
            <div style={{
              minHeight: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center'
            }}>
              <div className='lazy' style={{
                minHeight: '100px', 
                marginBottom: '35px', 
                width: '70%'
                }}></div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
                marginBottom: '30px',
                width: '100%'
              }}>
                <div className='lazy' style={{minHeight: '25px', width: '90%'}}></div>
                <div className='lazy' style={{minHeight: '25px', width: '80%'}}></div>
                <div className='lazy' style={{minHeight: '25px', width: '70%'}}></div>
                <div className='lazy' style={{minHeight: '25px', width: '60%'}}></div>
              </div>
              <div style={{
                display: 'flex',
                columnGap: '24px',
                width: '100%'
              }}>
                <div className='lazy' style={{
                  minHeight: '40px',
                  width: '120px'
                }}></div>
                <div className='lazy' style={{
                  minHeight: '40px',
                  width: '120px'
                }}></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-5 ms-auto">
              <div className='lazy lazy_vedio' style={{
                width: '400px',
                minHeight: '400px',
                maxWidth: '100%',
                marginLeft: 'auto'
              }}></div>
          </div>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <ul className='flex social_hero' style={{
            width: '100%',
            columnGap: '20px',
            justifyContent: 'space-between',
            backgroundColor: '#F2F2F2',
            padding: '20px',
            borderRadius: '16px',
            transform: 'translateY(-50%)',
            // flexWrap: 'wrap'
          }}>
            <li style={{
              backgroundColor: '#FFF',
              width: '100%',
              flexBasis: 'calc((100% - 120px) - 7)',
              borderRadius: '4px',
              height: '45px',
              padding: '10px'
            }}>
              <div className='flex' style={{
                columnGap: '10px',
                height: '100%'
              }}>
                <span className='lazy' style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%'
                }}></span>
                <span className='lazy' style={{
                  width: '70%',
                  height: '20px',
                }}></span>
              </div>
            </li>
            <li style={{
              backgroundColor: '#FFF',
              width: '100%',
              flexBasis: 'calc((100% - 120px) - 7)',
              borderRadius: '4px',
              height: '45px',
              padding: '10px'
            }}>
              <div className='flex' style={{
                columnGap: '10px',
                height: '100%'
              }}>
                <span className='lazy' style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%'
                }}></span>
                <span className='lazy' style={{
                  width: '70%',
                  height: '20px',
                }}></span>
              </div>
            </li>
            <li style={{
              backgroundColor: '#FFF',
              width: '100%',
              flexBasis: 'calc((100% - 120px) - 7)',
              borderRadius: '4px',
              height: '45px',
              padding: '10px'
            }}>
              <div className='flex' style={{
                columnGap: '10px',
                height: '100%'
              }}>
                <span className='lazy' style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%'
                }}></span>
                <span className='lazy' style={{
                  width: '70%',
                  height: '20px',
                }}></span>
              </div>
            </li>
            <li style={{
              backgroundColor: '#FFF',
              width: '100%',
              flexBasis: 'calc((100% - 120px) - 7)',
              borderRadius: '4px',
              height: '45px',
              padding: '10px'
            }}>
              <div className='flex' style={{
                columnGap: '10px',
                height: '100%'
              }}>
                <span className='lazy' style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%'
                }}></span>
                <span className='lazy' style={{
                  width: '70%',
                  height: '20px',
                }}></span>
              </div>
            </li>
            <li style={{
              backgroundColor: '#FFF',
              width: '100%',
              flexBasis: 'calc((100% - 120px) - 7)',
              borderRadius: '4px',
              height: '45px',
              padding: '10px'
            }}>
              <div className='flex' style={{
                columnGap: '10px',
                height: '100%'
              }}>
                <span className='lazy' style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%'
                }}></span>
                <span className='lazy' style={{
                  width: '70%',
                  height: '20px',
                }}></span>
              </div>
            </li>
            <li style={{
              backgroundColor: '#FFF',
              width: '100%',
              flexBasis: 'calc((100% - 120px) - 7)',
              borderRadius: '4px',
              height: '45px',
              padding: '10px'
            }}>
              <div className='flex' style={{
                columnGap: '10px',
                height: '100%'
              }}>
                <span className='lazy' style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%'
                }}></span>
                <span className='lazy' style={{
                  width: '70%',
                  height: '20px',
                }}></span>
              </div>
            </li>
            <li style={{
              backgroundColor: '#FFF',
              width: '100%',
              flexBasis: 'calc((100% - 120px) - 7)',
              borderRadius: '4px',
              height: '45px',
              padding: '10px'
            }}>
              <div className='flex' style={{
                columnGap: '10px',
                height: '100%'
              }}>
                <span className='lazy' style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%'
                }}></span>
                <span className='lazy' style={{
                  width: '70%',
                  height: '20px',
                }}></span>
              </div>
            </li>
          </ul>
        </Container>
      </section>
      <section className='last_projects'>
        <Container>
        <div className='lazy lazy_title'></div>
          <Row>
            <div className='col'>
              <div className='lazy' style={{
                width: '100%',
                minHeight: '290px'
              }}></div>
            </div>
            <div className='col d-none d-lg-block'>
              <div className='lazy' style={{
                width: '100%',
                minHeight: '290px'
              }}></div>
            </div>
            <div className='col d-none d-md-block'>
              <div className='lazy' style={{
                width: '100%',
                minHeight: '290px'
              }}></div>
            </div>
          </Row>
        </Container>
      </section>
      <section className='features_section'>
        <Container>
            <div className='lazy lazy_title'></div>
          <Row>
            <div className="col-12 col-md">
              <div className='flex' style={{
                gap: '24px',
                width: '100%',
                flexWrap: 'wrap',
                marginBottom: '20px'
              }}>
                <div className=' lazy' style={{
                  flexBasis: 'calc((100% - 24px) / 2)',
                  height: '170px',
                  borderRadius: '4px',
                  padding: '20px'
                }}>
                  <div className='flex' style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    width: '100%',
                    alignItems: 'flex-start'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '50px',
                      borderRadius: '4px',
                      backgroundColor: '#FFF'
                    }}></div>
                    <div className='flex' style={{
                      width: '100%'
                    }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: '#FFF',
                      }}></div>
                      <div style={{
                        width: '80%',
                        height: '25px',
                        borderRadius: '4px',
                        backgroundColor: '#FFF',
                        marginLeft: '10px'
                      }}></div>
                    </div>
                  </div>
                </div>
                <div className=' lazy' style={{
                  flexBasis: 'calc((100% - 24px) / 2)',
                  height: '170px',
                  borderRadius: '4px',
                  padding: '20px'
                }}>
                  <div className='flex' style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    width: '100%',
                    alignItems: 'flex-start'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '50px',
                      borderRadius: '4px',
                      backgroundColor: '#FFF'
                    }}></div>
                    <div className='flex' style={{
                      width: '100%'
                    }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: '#FFF',
                      }}></div>
                      <div style={{
                        width: '80%',
                        height: '25px',
                        borderRadius: '4px',
                        backgroundColor: '#FFF',
                        marginLeft: '10px'
                      }}></div>
                    </div>
                  </div>
                </div>
                <div className=' lazy' style={{
                  flexBasis: 'calc((100% - 24px) / 2)',
                  height: '170px',
                  borderRadius: '4px',
                  padding: '20px'
                }}>
                  <div className='flex' style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    width: '100%',
                    alignItems: 'flex-start'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '50px',
                      borderRadius: '4px',
                      backgroundColor: '#FFF'
                    }}></div>
                    <div className='flex' style={{
                      width: '100%'
                    }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: '#FFF',
                      }}></div>
                      <div style={{
                        width: '80%',
                        height: '25px',
                        borderRadius: '4px',
                        backgroundColor: '#FFF',
                        marginLeft: '10px'
                      }}></div>
                    </div>
                  </div>
                </div>
                <div className=' lazy' style={{
                  flexBasis: 'calc((100% - 24px) / 2)',
                  height: '170px',
                  borderRadius: '4px',
                  padding: '20px'
                }}>
                  <div className='flex' style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    width: '100%',
                    alignItems: 'flex-start'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '50px',
                      borderRadius: '4px',
                      backgroundColor: '#FFF'
                    }}></div>
                    <div className='flex' style={{
                      width: '100%'
                    }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: '#FFF',
                      }}></div>
                      <div style={{
                        width: '80%',
                        height: '25px',
                        borderRadius: '4px',
                        backgroundColor: '#FFF',
                        marginLeft: '10px'
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md">
              <div className='flex' style={{
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                rowGap: '20px'
              }}>
                <div className='lazy' style={{
                  height: '100px',
                }}></div>
                <div className='flex' style={{
                  flexDirection: 'column',
                  rowGap: '10px',
                  width: '100%',
                  alignItems: 'flex-start'
                }}>
                  <div className='lazy' style={{height: '30px', width: '90%'}}></div>
                  <div className='lazy' style={{height: '30px', width: '80%'}}></div>
                  <div className='lazy' style={{height: '30px', width: '70%'}}></div>
                  <div className='lazy' style={{height: '30px', width: '60%'}}></div>
                </div>
                <div className='flex' style={{columnGap: '24px'}}>
                  <div className='lazy' style={{width: '120px', height: '40px'}}></div>
                  <div className='lazy' style={{width: '120px', height: '40px'}}></div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section className='services_section'>
        <Container>
        <div className='lazy lazy_title'></div>
          <Row>
            <div className="col-12 col-md-4">
              <div className='flex lazy' style={{
                width: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '20px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#FFF',
                  marginBottom: '20px',
                  marginBottom: '20px'
                }}></div>
                <div style={{
                  width: '40%',
                  height: '40px',
                  borderRadius: '4px',
                  backgroundColor: '#FFF',
                  marginBottom: '20px',
                  marginBottom: '20px'
                }}></div>
                <div style={{width: '90%', height: '25px', borderRadius: '4px', marginBottom: '8px', backgroundColor: '#FFF'}}></div>
                <div style={{width: '80%', height: '25px', borderRadius: '4px', marginBottom: '8px', backgroundColor: '#FFF'}}></div>
                <div style={{width: '70%', height: '25px', borderRadius: '4px', marginBottom: '8px', backgroundColor: '#FFF'}}></div>
                <div style={{width: '60%', height: '25px', borderRadius: '4px', marginBottom: '8px', backgroundColor: '#FFF'}}></div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className='flex lazy' style={{
                width: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '20px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#FFF',
                  marginBottom: '20px'
                }}></div>
                <div style={{
                  width: '40%',
                  height: '40px',
                  borderRadius: '4px',
                  backgroundColor: '#FFF',
                  marginBottom: '20px'
                }}></div>
                <div style={{width: '90%', height: '25px', borderRadius: '4px', marginBottom: '8px', backgroundColor: '#FFF'}}></div>
                <div style={{width: '80%', height: '25px', borderRadius: '4px', marginBottom: '8px', backgroundColor: '#FFF'}}></div>
                <div style={{width: '70%', height: '25px', borderRadius: '4px', marginBottom: '8px', backgroundColor: '#FFF'}}></div>
                <div style={{width: '60%', height: '25px', borderRadius: '4px', marginBottom: '8px', backgroundColor: '#FFF'}}></div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className='flex lazy' style={{
                width: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '20px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#FFF',
                  marginBottom: '20px'
                }}></div>
                <div style={{
                  width: '40%',
                  height: '40px',
                  borderRadius: '4px',
                  backgroundColor: '#FFF',
                  marginBottom: '20px'
                }}></div>
                <div style={{width: '90%', height: '25px', borderRadius: '4px', marginBottom: '8px', backgroundColor: '#FFF'}}></div>
                <div style={{width: '80%', height: '25px', borderRadius: '4px', marginBottom: '8px', backgroundColor: '#FFF'}}></div>
                <div style={{width: '70%', height: '25px', borderRadius: '4px', marginBottom: '8px', backgroundColor: '#FFF'}}></div>
                <div style={{width: '60%', height: '25px', borderRadius: '4px', marginBottom: '8px', backgroundColor: '#FFF'}}></div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section className='buy_section'>
        <Container>
        <div className='lazy lazy_title'></div>
          <Row>
            <div className='col'>
              <div className='lazy' style={{
                width: '100%',
                minHeight: '400px'
              }}></div>
            </div>
            <div className='col d-none d-md-block'>
              <div className='lazy' style={{
                width: '100%',
                minHeight: '400px'
              }}></div>
            </div>
          </Row>
        </Container>
      </section>
      <section className='companies_section'>
        <Container>
        <div className='lazy lazy_title'></div>
          <Row>
            <div className='col-3'><div className='lazy' style={{height: '120px'}}></div></div>
            <div className='col-3'><div className='lazy' style={{height: '120px'}}></div></div>
            <div className='col-3'><div className='lazy' style={{height: '120px'}}></div></div>
            <div className='col-3'><div className='lazy' style={{height: '120px'}}></div></div>
          </Row>
        </Container>
      </section>
      <section className='lazy_testimonials' style={{marginBottom: '50px'}}>
        <Container>
          <div className='lazy lazy_title'></div>
          <div className='flex' style={{width: '100%'}}>
            <div className='lazy' style={{width: '10%', height: '240px'}}></div>
            <div className='lazy' style={{width: '77%', margin: '0 auto', height: '240px'}}></div>
            <div className='lazy' style={{width: '10%', height: '240px'}}></div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default LazyHome;